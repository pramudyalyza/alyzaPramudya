"use client";

import { useState, useEffect, useRef } from 'react';
import { Send, Loader2, User, ArrowDown, Bot } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/header";
import { pipeline, env } from '@xenova/transformers';

// Configure @xenova/transformers
env.localModelPath = '/';
env.allowRemoteModels = true;
env.allowLocalModels = false;

const MODEL_NAME = 'pramudyalyza/asktoal-model-v2';

interface Message {
  role: 'user' | 'model';
  message: string;
  timestamp: string;
  response_time?: number | null;
  isLoading?: boolean;
  isError?: boolean;
}

interface QAItem {
  question: string;
  answer: string;
  embedding: number[];
}

// --- Helper function for cosine similarity ---
function cosineSimilarity(vec1: number[], vec2: number[]): number {
  if (!vec1 || !vec2 || vec1.length !== vec2.length) {
    return 0;
  }
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    normA += vec1[i] * vec1[i];
    normB += vec2[i] * vec2[i];
  }
  if (normA === 0 || normB === 0) {
    return 0;
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// --- Chatbot Component ---
export default function ChatbotPage() {
  // --- State for Messages and Input ---
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // --- State for Chatbot Model and Data Loading ---
  const [qaData, setQaData] = useState<QAItem[]>([]);
  const [loadingModel, setLoadingModel] = useState(true);
  const [thinking, setThinking] = useState(false);
  const embedderRef = useRef<any>(null);
  const [embedderInitialized, setEmbedderInitialized] = useState(false);

  // --- State for UI Elements ---
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // --- Effects ---
  useEffect(() => {
    setMessages([
      {
        role: "model",
        message: "Hey there! I'm AskToAl 👋🏻 I can help you explore Alyza's portfolio and background. Feel free to ask in English! What would you like to know?",
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  useEffect(() => {
    const initializeChatbot = async () => {
      try {
        const res = await fetch('/qnaWithEmbeddings.json');
        const data = await res.json();
        setQaData(data);
      } catch (error) {
        console.error("Failed to load QA data:", error);
        setMessages(prev => [...prev, { type: 'model', content: "Error loading my knowledge base. Please try again later.", isError: true }]);
        setLoadingModel(false);
        return;
      }

      if (!embedderInitialized) {
        try {
          const model = await pipeline('feature-extraction', MODEL_NAME, {
            quantized: true,
          });
          embedderRef.current = model;
          setEmbedderInitialized(true);
          console.log("Embedder initialized successfully.");
        } catch (error) {
          console.error("Failed to load embedder model:", error);
          setMessages(prev => [...prev, { type: 'model', content: "Error loading my brain. Please try again later.", isError: true }]);
        } finally {
          setLoadingModel(false);
        }
      } else {
        setLoadingModel(false);
      }
    };

    initializeChatbot();
  }, [embedderInitialized]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100;
      setShowScrollButton(isScrolledUp);
    };

    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener("scroll", handleScroll);
      return () => chatContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // --- Helper Functions ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!input.trim() || thinking || loadingModel || !embedderRef.current) return;

    const currentInput = input;
    setInput("");

    const userMessage: Message = {
      role: "user",
      message: currentInput,
    };
    setMessages(prev => [...prev, userMessage]);
    setThinking(true);

    const botLoadingMessage: Message = {
      role: 'model',
      message: '',
      isLoading: true,
    };
    setMessages(prev => [...prev, botLoadingMessage]);
    requestAnimationFrame(() => scrollToBottom());

    try {
      await new Promise(resolve => setTimeout(resolve, 50));

      const userEmbeddingOutput = await embedderRef.current(
        currentInput,
        { pooling: 'mean', normalize: true }
      );
      const userEmbedding = Array.from(userEmbeddingOutput.data);

      let bestMatch: QAItem | null = null;
      let highestSimilarity = -1;
      const MIN_SIMILARITY_THRESHOLD = 0.75;

      for (const qa of qaData) {
        if (!qa.embedding) {
          console.warn("Missing embedding for QA item:", qa);
          continue;
        }
        const similarity = cosineSimilarity(userEmbedding, qa.embedding);

        if (similarity > highestSimilarity) {
          highestSimilarity = similarity;
          bestMatch = qa;
        }
      }

      let botResponseContent: string;

      if (bestMatch && highestSimilarity >= MIN_SIMILARITY_THRESHOLD) {
        botResponseContent = bestMatch.answer;
      } else {
        botResponseContent = "I'm sorry, I don't have information about that. Could you try rephrasing or asking something else about Alyza?";
      }

      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessageIndex = newMessages.length - 1;
        if (newMessages[lastMessageIndex]?.isLoading) {
          newMessages[lastMessageIndex] = {
            ...newMessages[lastMessageIndex],
            message: botResponseContent,
            isLoading: false,
            isError: false
          };
        } else {
            newMessages.push({
                role: 'model',
                message: botResponseContent,
                isLoading: false,
                isError: false
            });
        }
        return newMessages;
      });

    } catch (error) {
      console.error("Error processing message:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessageIndex = newMessages.length - 1;
        if (newMessages[lastMessageIndex]?.isLoading) {
          newMessages[lastMessageIndex] = {
            ...newMessages[lastMessageIndex],
            message: "Oops, something went wrong while processing your request. Please try again.",
            isLoading: false,
            isError: true
          };
        } else {
            newMessages.push({
                role: 'model',
                message: "Oops, something went wrong while processing your request. Please try again.",
                isLoading: false,
                isError: true
            });
        }
        return newMessages;
      });
    } finally {
      setThinking(false);
      requestAnimationFrame(() => scrollToBottom());
    }
  };

  return (
    <>
      <Header />
        {/* Chatbot Section */}
        <section className="py-20 flex-grow bg-primary-foreground">
          <div className="container primary mx-auto px-6 max-w-5xl">
            <div className="border-t border-gray-200 bg-slate-300 rounded-xl shadow-md overflow-hidden flex flex-col h-[500px] relative">
              {/* Chat Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center">
                  {loadingModel && <Loader2 className="h-5 w-5 animate-spin text-primary-foreground" />}
                  <h2 className="text-xl font-semibold">
                    AskToAl
                  </h2>
                </div>
              </div>

              {/* Chat Messages */}
              <motion.div
                ref={chatContainerRef}
                className="flex-grow overflow-y-auto p-4"
              >
                {messages.map((message, index) => {
                  return (
                    <motion.div
                      key={index}
                      className={`mt-4 mx-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl px-6 py-4 my-1 ${message.role === "user"
                          ? "bg-primary-foreground text-primary shadow-gray-500/20 shadow-md"
                          : "bg-primary/80 text-primary-foreground shadow-gray-500/20 shadow-md"
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          {message.role === "model" ? (
                            message.isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Bot className="mr-2 h-5 w-5 text-primary-foreground" />
                          ) : (
                            <User className="mr-2 h-5 w-5" />
                          )}
                          <span className="font-semibold text-lg">
                            {message.role === "model"
                              ? "Chatbot"
                              : "You"}
                          </span>
                        </div>
                        <div className="min-h-[30px]">
                          {message.message}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                <div ref={messagesEndRef} />
              </motion.div>

              {showScrollButton && (
                <button
                  onClick={scrollToBottom}
                  className="absolute bottom-[80px] left-[50%] transform -translate-x-1/2 bg-primary-foreground text-primary rounded-full p-2 shadow-lg hover:bg-primary-foreground/70 transition-colors z-10"
                  aria-label="Scroll to bottom"
                >
                  <ArrowDown className="h-5 w-5" />
                </button>
              )}

              {/* Chat Input */}
              <form onSubmit={handleSendMessage}>
                <div className="border-t border-gray-200 bg-primary p-4 flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={loadingModel ? "Loading chatbot..." : (thinking ? "Thinking..." : "Type your message here...")}
                    className="flex-grow bg-primary text-primary-foreground placeholder:text-primary-foreground/70"
                    disabled={thinking || loadingModel}
                  />
                  <Button
                    type="submit"
                    className="bg-primary-foreground hover:bg-primary-foreground/70 text-primary"
                    disabled={thinking || loadingModel || !input.trim()}
                  >
                    {thinking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </>
  );
}