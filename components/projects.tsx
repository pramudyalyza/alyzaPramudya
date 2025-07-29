"use client"; 

import { useState, useEffect  } from 'react'; 
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, FileIcon as FilePresentation, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Desk Fairy",
      description: "Desk Fairy is a tool to automatically organize papers on my desktop, by extracting abstracts, clustering with ML, and generating topic-based folders via LLM.",
      image: "/DeskFairy.jpg",
      github: "https://github.com/pramudyalyza/DeskFairy",
      demo: "https://drive.google.com/file/d/1rOUbMn-4cTcn59OpBiH22nOb2KQ2hkjq/view?usp=drive_link",
      presentation: null,
      category: "AI & Data Science",
    },
    {
      id: 2,
      title: "AskToAl",
      description: "AskToAl is a client-side AI chatbot for my portfolio website that provides instant answers via fine-tuned Sentence Transformers",
      image: "/asktoal.png",
      demo: "https://pramudyalyza.vercel.app/chatbot",
      presentation: null,
      category: "AI & Data Science",
    },
    {
      id: 3,
      title: "DearCSV",
      description: "DearCSV is a simple app that lets users chat with their CSV data using an LLM",
      image: "/DearCSV.jpg",
      github: "https://github.com/pramudyalyza/dearCSV",
      demo: "https://drive.google.com/file/d/1gqXAA2YDuWBHqhLtgbmy_GR8qArOlZFH/view?usp=drive_link",
      presentation: null,
      category: "AI & Data Science",
    },
    {
      id: 4,
      title: "Ask Me Girl!",
      description: "Ask Me Girl! is a sassy AI bestie who reads your PDFs and spills the tea so you don't have to.",
      image: "/askmegirl.jpg",
      github: "https://github.com/pramudyalyza/askMeGirl",
      demo: "https://drive.google.com/file/d/1PJnp4e4Mzx_USqSPz__G3F-DETh8Cvx6/view?usp=drive_link",
      presentation: null,
      category: "AI & Data Science",
    },
    {
      id: 5,
      title: "Prompt & Prejudice",
      description: "Prompt & Prejudice creates dreamy romance ideas—just input names, a vibe, and setting, or go random for a universe-crafted love story.",
      image: "/promptprejudice.jpg",
      github: "https://github.com/pramudyalyza/prompt-and-prejudice",
      demo: "https://drive.google.com/file/d/1DOFzRS4z89vLvQ-4CyoTVETf0SkVShYI/view?usp=drive_link",
      presentation: null,
      category: "AI & Data Science",
    },
    {
      id: 6,
      title: "Dog Breed Classifierz",
      description: "A web app that predicts dog breeds from images using a fine-tuned AlexNet. Upload, use camera, or URL. Supports 10 predefined breeds.",
      image: "/DogBreedClassifierz.jpg",
      github: "https://github.com/pramudyalyza/dogBreedClassifierz",
      demo: "http://dogbreedclassifierz.streamlit.app/",
      presentation: "https://drive.google.com/file/d/1jZEHkyWy7iQkgJOZ4ZLtDZ_HLE9ZF5EM/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 7,
      title: "IKN Sentiment App",
      description: "A sentiment tracker for Indonesia’s new capital using ML on YouTube comments. View daily trends or test your own text.",
      image: "/iknSentiment.jpg",
      github: "http://github.com/pramudyalyza/IKN-SentimentApp",
      demo: "http://iknsentimentapp.streamlit.app/",
      presentation: "https://drive.google.com/drive/folders/1YuHREcAEAMtEOJmNJYfL5YIjLHGKKHTw?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 8,
      title: "RPA Loan Request",
      description: "UiPath automation script that use REFramework to manage daily loan requests via dispatcher-performer setup, including handling queue handling, form, email, and file.",
      image: "/loanRequest.jpg",
      github: "https://github.com/pramudyalyza/RPA-Loan-Request",
      demo: "https://drive.google.com/file/d/1fn9Q9gfAELSpt8k_pdhhuzN61Kf5Rg0a/view?usp=drive_link",
      presentation: null,
      category: "RPA",
    },
    {
      id: 9,
      title: "RPA Nationality API",
      description: "UiPath automation script to predict top 3 nationalities for a list of names and records the results in Excel using the Nationalize.io API.",
      image: "/nationalityAPI.jpg",
      github: "https://github.com/pramudyalyza/RPA-Nationality-API",
      demo: "https://drive.google.com/file/d/1f8OjtdwjklRLXmOFWPnAR9A3Wm7MJADw/view?usp=drive_link",
      presentation: null,
      category: "RPA",
    },
    {
      id: 10,
      title: "RPA Invoice RegEx",
      description: "UiPath automation script to extract invoice number, customer ID, total amount, and due date from PDF files using regular expressions.",
      image: "/invoiceRegex.jpg",
      github: "https://github.com/pramudyalyza/RPA-Invoice-Regex",
      demo: "https://drive.google.com/file/d/1tYP7RAL258dDHqIEU1G1_fHL7l7qjpnc/view?usp=drive_link",
      presentation: null,
      category: "RPA",
    },
    {
      id: 11,
      title: "RPA Web Scrapping",
      description: "UiPath automation script to scrape population data by age group and gender from the BPS website (2018 till 2025) and export it to CSV files.",
      image: "/webScrap.jpg",
      github: "https://github.com/pramudyalyza/RPA-Web-Scrapping",
      demo: "https://drive.google.com/file/d/1TZuQD32gEhykuu0Phw1sa_wQ2nxKPCxd/view?usp=drive_link",
      presentation: null,
      category: "RPA",
    },
    {
      id: 12,
      title: "RPA Excel and Email",
      description: "UiPath automation script to update monthly master data with the latest MTD figures, generate pivot reports, and email them to stakeholders.",
      image: "/excelEmail.jpg",
      github: "https://github.com/pramudyalyza/RPA-Excel-and-Email",
      demo: "https://drive.google.com/file/d/1BeaIU4jJWW19_N2cWRrR2dyiA3XW5wl2/view?usp=drive_link",
      presentation: null,
      category: "RPA",
    },
    {
      id: 13,
      title: "Frezz : Fruit Freshness Detector",
      description: "Frezz detects fruit freshness to assist farmers and supermarket staff in quality control, focusing on apples, bananas, and oranges.",
      image: "/frezz.png",
      github: "https://github.com/pramudyalyza/frezz",
      demo: null,
      presentation: "https://drive.google.com/file/d/1vHnm6AyTlvJx61R6J-uQyzNDE3RgtBoC/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 14,
      title: "Covid-19 in US: Weather & Socioeconomic Factors",
      description: "Analyzed how weather and socioeconomic factors affect U.S. COVID-19 cases, supported by an interactive dashboard to visualize key insights.",
      image: "/covid.png",
      github: "https://github.com/pramudyalyza/COVID19_in_US_Weather_Socioeconomic_Factors",
      demo: "https://bit.ly/AlyzaProject02-Tableau",
      presentation: "https://drive.google.com/file/d/1P_2zLRi4VjabM4zxgM5g5A-pAzT90SUu/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 15,
      title: "Urban Visual Pollutants Detection",
      description: "Built a system to detect and classify urban visual pollutants in images, using a dataset featuring graffiti, faded signage, and more.",
      image: "/urban.png",
      github: "https://github.com/pramudyalyza/Urban-Visual-Pollutants-Detection/tree/main",
      demo: null,
      presentation: "https://drive.google.com/file/d/1RZAqaMlVHX0D0D5Jl9Htv4Yw2Iu71oKL/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 16,
      title: "WHO: Life Expectancy Analysis",
      description: "Explored Kaggle’s Life Expectancy dataset to identify key factors and built a predictive model using Random Forest.",
      image: "/who.png",
      github: "https://github.com/pramudyalyza/WHO-LifeExpectancyAnalysis",
      demo: "https://bit.ly/AlyzaProject04-Tableau",
      presentation: "https://drive.google.com/file/d/1RqLpIodPB_9RtBsRE8nBtoPJvwVu_RHL/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 17,
      title: "News Category Classification",
      description: "Classifies Indonesian news articles using scraped data from Kompas, Pikiran Rakyat, Tribunnews, and Merdeka.",
      image: "/news.png",
      github: "https://github.com/pramudyalyza/News-Category-Classification/tree/main",
      demo: null,
      presentation: "https://drive.google.com/file/d/1PpFHvyuq1-gPU9txAjYlxtERTlZZ-AF3/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 18,
      title: "Jakarta Air Quality Classification",
      description: "A model forecasting Jakarta’s air pollution to support government analysis of air quality factors.",
      image: "/airQuality.png",
      github: "https://github.com/pramudyalyza/Jakarta-Air-Quality-Classification",
      demo: null,
      presentation: "https://drive.google.com/file/d/1rCAdiJH55q8YvCvJYU86I8rAkAvTNzVz/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 19,
      title: "Diabetes Classification & Regression",
      description: "A model to classify diabetes outcome and predict pedigree function using key health indicators like glucose and pregnancies.",
      image: "/diabetes.png",
      github: "https://github.com/pramudyalyza/Diabetes-Classification-Regression",
      demo: null,
      presentation: "https://drive.google.com/file/d/1rgQS1SwsuWpg_PU-A28jPQK9JGEGWEAn/view?usp=drive_link",
      category: "AI & Data Science",
    },
    {
      id: 20,
      title: "Telco Customer Churn Prediction",
      description: "Developed a predictive model to identify Telco customers likely to churn, helping reduce customer loss.",
      image: "/telco.png",
      github: "https://github.com/pramudyalyza/TelcoCustomerChurn_R",
      demo: null,
      presentation: "https://drive.google.com/file/d/1Z-WT5ykqrgV1VcgHNYvhcPJPdelSl8CY/view?usp=drive_link",
      category: "AI & Data Science",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "RPA", "AI & Data Science"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectsPerPage, setProjectsPerPage] = useState(3)

  const filteredProjects = projects.filter((project) => selectedCategory === "All" || project.category === selectedCategory)
  const [totalPages, setTotalPages] = useState(Math.ceil(filteredProjects.length / projectsPerPage))
  const visibleProjects = filteredProjects.slice(currentIndex, currentIndex + projectsPerPage)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Mobile
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setProjectsPerPage(2);
      } else { // Desktop
        setProjectsPerPage(3);
      }
    }

    handleResize()
  
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setTotalPages(Math.ceil(filteredProjects.length / projectsPerPage))
    setCurrentIndex(0)
  }, [selectedCategory, projectsPerPage, filteredProjects.length])

  const handleNext = () => {
    if (currentIndex + projectsPerPage < filteredProjects.length) {
      setCurrentIndex((prev) => prev + projectsPerPage)
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(0, prev - projectsPerPage))
    }
  }

  const currentPage = Math.floor(currentIndex / projectsPerPage)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        {/* --- Category Filter Buttons --- */}
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors border",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Buttons - Above Cards */}
        <div className="md:hidden flex justify-center mb-6 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "px-4 py-1 rounded bg-primary text-muted transition text-sm font-medium shadow border border-border",
              currentIndex === 0
                ? "opacity-20 cursor-not-allowed"
                : "hover:bg-primary"
            )}
          >
            ← Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + projectsPerPage >= filteredProjects.length}
            className={cn(
              "px-4 py-1 rounded bg-primary text-muted transition text-sm font-medium shadow border border-border",
              currentIndex + projectsPerPage >= filteredProjects.length
                ? "opacity-20 cursor-not-allowed"
                : "hover:bg-primary"
            )}
          >
            → Next
          </button>
        </div>

        <div className="flex items-center justify-between w-full">
          {/* Left Button - Desktop Only */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "hidden md:flex p-2 rounded-full bg-primary text-muted shadow transition hover:bg-primary/80 flex-shrink-0",
              currentIndex === 0 && "opacity-20 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="flex-1 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {visibleProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col h-full bg-muted relative"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.presentation && (
                      <Link
                        href={project.presentation}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Presentation for ${project.title}`}
                      >
                        <FilePresentation className="h-5 w-5" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-muted shadow hover:shadow-md transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Button - Desktop Only */}
          <button
            onClick={handleNext}
            disabled={currentIndex + projectsPerPage >= filteredProjects.length}
            className={cn(
              "hidden md:flex p-2 rounded-full bg-primary text-muted shadow transition hover:bg-primary/80 flex-shrink-0",
              currentIndex + projectsPerPage >= filteredProjects.length &&
                "opacity-20 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * projectsPerPage)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                i === currentPage
                  ? "bg-primary scale-110"
                  : "bg-muted-foreground/30"
              )}
              aria-label={`Go to project group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}