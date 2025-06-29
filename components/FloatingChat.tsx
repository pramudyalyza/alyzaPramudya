"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleStartChat = () => {
    toast.info("Taking you to the chatbot. Please wait a moment...");
    router.push("/chatbot");
  }

  return (
    <motion.div className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Chatbot Button */}
      {isOpen ? (
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.2 }}
          
          className="bg-primary rounded-lg shadow-lg p-4 mb-4 w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-primary-foreground">AskToAl: Alyza Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-primary-foreground hover:text-primary-foreground/70">
              <X size={15} />
            </button>
          </div>
          <p className="text-primary-foreground/70 text-sm mb-4">
            Curious about me? This chatbot can answer questions about my portfolio, projects, or background!
          </p>
          <Button
            onClick={handleStartChat}
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Start Chat
          </Button>
        </motion.div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-10 w-10" />
        </Button>
      )}
    </motion.div>
  )
}