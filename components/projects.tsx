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
      title: "DearCSV",
      description: "DearCSV is a simple app that lets users chat with their CSV data using an LLM",
      image: "/DearCSV.jpg",
      github: "https://github.com/pramudyalyza/dearCSV",
      demo: "https://drive.google.com/file/d/1gqXAA2YDuWBHqhLtgbmy_GR8qArOlZFH/view?usp=drive_link",
      presentation: null,
    },
    {
      id: 2,
      title: "Ask Me Girl!",
      description: "Ask Me Girl! is a sassy AI bestie who reads your PDFs and spills the tea so you don't have to.",
      image: "/askmegirl.jpg",
      github: "https://github.com/pramudyalyza/askMeGirl",
      demo: "https://drive.google.com/file/d/1PJnp4e4Mzx_USqSPz__G3F-DETh8Cvx6/view?usp=drive_link",
      presentation: null,
    },
    {
      id: 3,
      title: "Prompt & Prejudice",
      description: "Prompt & Prejudice creates dreamy romance ideas—just input names, a vibe, and setting, or go random for a universe-crafted love story.",
      image: "/promptprejudice.jpg",
      github: "https://github.com/pramudyalyza/prompt-and-prejudice",
      demo: "https://drive.google.com/file/d/1DOFzRS4z89vLvQ-4CyoTVETf0SkVShYI/view?usp=drive_link",
      presentation: null,
    },
    {
      id: 4,
      title: "Dog Breed Classifierz",
      description: "A web app that predicts dog breeds from images using a fine-tuned AlexNet. Upload, use camera, or URL. Supports 10 predefined breeds.",
      image: "/DogBreedClassifierz.jpg",
      github: "https://github.com/pramudyalyza/dogBreedClassifierz",
      demo: "http://dogbreedclassifierz.streamlit.app/",
      presentation: "https://drive.google.com/file/d/1jZEHkyWy7iQkgJOZ4ZLtDZ_HLE9ZF5EM/view?usp=drive_link",
    },
    {
      id: 5,
      title: "IKN Sentiment App",
      description: "A sentiment tracker for Indonesia’s new capital using ML on YouTube comments. View daily trends or test your own text.",
      image: "/iknSentiment.jpg",
      github: "http://github.com/pramudyalyza/IKN-SentimentApp",
      demo: "http://iknsentimentapp.streamlit.app/",
      presentation: "https://drive.google.com/drive/folders/1YuHREcAEAMtEOJmNJYfL5YIjLHGKKHTw?usp=drive_link",
    },
    {
      id: 6,
      title: "Frezz : Fruit Freshness Detector",
      description: "Frezz detects fruit freshness to assist farmers and supermarket staff in quality control, focusing on apples, bananas, and oranges.",
      image: "/frezz.png",
      github: "https://github.com/pramudyalyza/frezz",
      demo: null,
      presentation: "https://drive.google.com/file/d/1vHnm6AyTlvJx61R6J-uQyzNDE3RgtBoC/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Covid-19 in US: Weather & Socioeconomic Factors",
      description: "Analyzed how weather and socioeconomic factors affect U.S. COVID-19 cases, supported by an interactive dashboard to visualize key insights.",
      image: "/covid.png",
      github: "https://github.com/pramudyalyza/COVID19_in_US_Weather_Socioeconomic_Factors",
      demo: "https://bit.ly/AlyzaProject02-Tableau",
      presentation: "https://drive.google.com/file/d/1P_2zLRi4VjabM4zxgM5g5A-pAzT90SUu/view?usp=drive_link",
    },
    {
      id: 8,
      title: "Urban Visual Pollutants Detection",
      description: "Built a system to detect and classify urban visual pollutants in images, using a dataset featuring graffiti, faded signage, and more.",
      image: "/urban.png",
      github: "https://github.com/pramudyalyza/Urban-Visual-Pollutants-Detection/tree/main",
      demo: null,
      presentation: "https://drive.google.com/file/d/1RZAqaMlVHX0D0D5Jl9Htv4Yw2Iu71oKL/view?usp=drive_link",
    },
    {
      id: 9,
      title: "WHO: Life Expectancy Analysis",
      description: "Explored Kaggle’s Life Expectancy dataset to identify key factors and built a predictive model using Random Forest.",
      image: "/who.png",
      github: "https://github.com/pramudyalyza/WHO-LifeExpectancyAnalysis",
      demo: "https://bit.ly/AlyzaProject04-Tableau",
      presentation: "https://drive.google.com/file/d/1RqLpIodPB_9RtBsRE8nBtoPJvwVu_RHL/view?usp=drive_link",
    },
    {
      id: 10,
      title: "News Category Classification",
      description: "Classifies Indonesian news articles using scraped data from Kompas, Pikiran Rakyat, Tribunnews, and Merdeka.",
      image: "/news.png",
      github: "https://github.com/pramudyalyza/News-Category-Classification/tree/main",
      demo: null,
      presentation: "https://drive.google.com/file/d/1PpFHvyuq1-gPU9txAjYlxtERTlZZ-AF3/view?usp=drive_link",
    },
    {
      id: 11,
      title: "Jakarta Air Quality Classification",
      description: "A model forecasting Jakarta’s air pollution to support government analysis of air quality factors.",
      image: "/airQuality.png",
      github: "https://github.com/pramudyalyza/Jakarta-Air-Quality-Classification",
      demo: null,
      presentation: "https://drive.google.com/file/d/1rCAdiJH55q8YvCvJYU86I8rAkAvTNzVz/view?usp=drive_link",
    },
    {
      id: 12,
      title: "Diabetes Classification & Regression",
      description: "A model to classify diabetes outcome and predict pedigree function using key health indicators like glucose and pregnancies.",
      image: "/diabetes.png",
      github: "https://github.com/pramudyalyza/Diabetes-Classification-Regression",
      demo: null,
      presentation: "https://drive.google.com/file/d/1rgQS1SwsuWpg_PU-A28jPQK9JGEGWEAn/view?usp=drive_link",
    },
    {
      id: 13,
      title: "Telco Customer Churn Prediction",
      description: "Developed a predictive model to identify Telco customers likely to churn, helping reduce customer loss.",
      image: "/telco.png",
      github: "https://github.com/pramudyalyza/TelcoCustomerChurn_R",
      demo: null,
      presentation: "https://drive.google.com/file/d/1Z-WT5ykqrgV1VcgHNYvhcPJPdelSl8CY/view?usp=drive_link",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectsPerPage, setProjectsPerPage] = useState(3)
  const [totalPages, setTotalPages] = useState(Math.ceil(projects.length / projectsPerPage))
  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage)
  
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
    setTotalPages(Math.ceil(projects.length / projectsPerPage))
    setCurrentIndex(0)
  }, [projectsPerPage, projects.length])

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(prev => prev + projectsPerPage)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => Math.max(0, prev - projectsPerPage))
    }
  }

  const currentPage = Math.floor(currentIndex / projectsPerPage)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

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
            disabled={currentIndex + projectsPerPage >= projects.length}
            className={cn(
              "px-4 py-1 rounded bg-primary text-muted transition text-sm font-medium shadow border border-border",
              currentIndex + projectsPerPage >= projects.length
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
                <Card key={project.id} className="overflow-hidden flex flex-col h-full bg-muted relative">
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
                    <p className="text-muted-foreground">{project.description}</p>
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
            disabled={currentIndex + projectsPerPage >= projects.length}
            className={cn(
              "hidden md:flex p-2 rounded-full bg-primary text-muted shadow transition hover:bg-primary/80 flex-shrink-0",
              currentIndex + projectsPerPage >= projects.length && "opacity-20 cursor-not-allowed"
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
                i === currentPage ? "bg-primary scale-110" : "bg-muted-foreground/30"
              )}
              aria-label={`Go to project group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}