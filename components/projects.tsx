"use client"; 

import { useState, useEffect  } from 'react'; 
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, FileIcon as FilePresentation, ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ask Me Girl!",
      description: "Ask Me Girl! is a sassy AI bestie who reads your PDFs and spills the tea so you don't have to.",
      image: "/askmegirl.jpg",
      github: "https://github.com/pramudyalyza/askMeGirl",
      demo: "https://drive.google.com/file/d/1PJnp4e4Mzx_USqSPz__G3F-DETh8Cvx6/view?usp=drive_link",
      presentation: null,
    },
    {
      id: 2,
      title: "Prompt & Prejudice",
      description: "Prompt & Prejudice is my little romance prompt potion. Just toss in two names, a vibe, and a setting — or hit random and let the universe cook. You'll get a dreamy story idea brewed just for you",
      image: "/promptprejudice.jpg",
      github: "https://github.com/pramudyalyza/prompt-and-prejudice",
      demo: "https://drive.google.com/file/d/1DOFzRS4z89vLvQ-4CyoTVETf0SkVShYI/view?usp=drive_link",
      presentation: null,
    },
    {
      id: 3,
      title: "Dog Breed Classifierz",
      description: "A Streamlit web app that predicts the dog breed from an image (upload, camera, url) using a fine-tuned AlexNet model. Supports 10 predifined dog breeds.",
      image: "/DogBreedClassifierz.jpg",
      github: "https://github.com/pramudyalyza/dogBreedClassifierz",
      demo: "http://dogbreedclassifierz.streamlit.app/",
      presentation: "https://drive.google.com/file/d/1jZEHkyWy7iQkgJOZ4ZLtDZ_HLE9ZF5EM/view?usp=drive_link",
    },
    {
      id: 4,
      title: "IKN Sentiment App",
      description: "A simple tool that tracks public sentiment on Indonesia's new capital. It automatically collects YouTube comments, cleans the data, and uses ML to predict the sentiment. Users can view daily update sentiment trends through a dashboard or input text for instant sentiment predictions.",
      image: "/iknSentiment.jpg",
      github: "http://github.com/pramudyalyza/IKN-SentimentApp",
      demo: "http://iknsentimentapp.streamlit.app/",
      presentation: "https://drive.google.com/drive/folders/1YuHREcAEAMtEOJmNJYfL5YIjLHGKKHTw?usp=drive_link",
    },
    {
      id: 5,
      title: "Frezz : Fruit Freshness Detector",
      description: "Frezz is a fruit freshness detection tool which is expected to help fruit farmers and supermarket employees to carry out quality control on fruit that will be sold to customers, especially apples, bananas and oranges.",
      image: "/frezz.png",
      github: "https://github.com/pramudyalyza/frezz",
      demo: null,
      presentation: "https://drive.google.com/file/d/1vHnm6AyTlvJx61R6J-uQyzNDE3RgtBoC/view?usp=drive_link",
    },
    {
      id: 6,
      title: "Covid-19 in US: Weather & Socioeconomic Factors",
      description: "This project aims to analyze the impact of weather and socioeconomic factors on COVID-19 cases in the United States. In addition, I also developed a comprehensive interactive dashboard to visualize the findings.",
      image: "/covid.png",
      github: "https://github.com/pramudyalyza/COVID19_in_US_Weather_Socioeconomic_Factors",
      demo: "https://bit.ly/AlyzaProject02-Tableau",
      presentation: "https://drive.google.com/file/d/1P_2zLRi4VjabM4zxgM5g5A-pAzT90SUu/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Urban Visual Pollutants Detection",
      description: "This project aims to develop a system to detect and classify urban visual pollutants in images. The system is trained on a dataset of images of urban visual pollutants, including graffiti, faded signage, etc.",
      image: "/urban.png",
      github: "https://github.com/pramudyalyza/Urban-Visual-Pollutants-Detection/tree/main",
      demo: null,
      presentation: "https://drive.google.com/file/d/1RZAqaMlVHX0D0D5Jl9Htv4Yw2Iu71oKL/view?usp=drive_link",
    },
    {
      id: 8,
      title: "WHO: Life Expectancy Analysis",
      description: "This project aims to explore and analyze the Life Expectancy dataset from Kaggle to identify factors influencing life expectancy and develop a predictive model to predict life expectancy using a Random Forest model. ",
      image: "/who.png",
      github: "https://github.com/pramudyalyza/WHO-LifeExpectancyAnalysis",
      demo: "https://bit.ly/AlyzaProject04-Tableau",
      presentation: "https://drive.google.com/file/d/1RqLpIodPB_9RtBsRE8nBtoPJvwVu_RHL/view?usp=drive_link",
    },
    {
      id: 9,
      title: "News Category Classification",
      description: "The aim of this project is text classification, specifically for news articles in Indonesian. The project involves scraping text data from four news outlets in Indonesia: Kompas, Pikiran Rakyat, Tribunnews, and Merdeka.",
      image: "/news.png",
      github: "https://github.com/pramudyalyza/News-Category-Classification/tree/main",
      demo: null,
      presentation: "https://drive.google.com/file/d/1PpFHvyuq1-gPU9txAjYlxtERTlZZ-AF3/view?usp=drive_link",
    },
    {
      id: 10,
      title: "Jakarta Air Quality Classification",
      description: "This project aims to create a model that can predict future air pollution levels. Thus, it can help the government and related agencies in analyzing the factors that affect Jakarta's air quality.",
      image: "/airQuality.png",
      github: "https://github.com/pramudyalyza/Jakarta-Air-Quality-Classification",
      demo: null,
      presentation: "https://drive.google.com/file/d/1rCAdiJH55q8YvCvJYU86I8rAkAvTNzVz/view?usp=drive_link",
    },
    {
      id: 11,
      title: "Diabetes Classification & Regression",
      description: "This project focuses on classifying the diabetes outcome and predicting the value of diabetes pedigree function. The dataset includes information like the number of pregnancies, blood glucose level, etc.",
      image: "/diabetes.png",
      github: "https://github.com/pramudyalyza/Diabetes-Classification-Regression",
      demo: null,
      presentation: "https://drive.google.com/file/d/1rgQS1SwsuWpg_PU-A28jPQK9JGEGWEAn/view?usp=drive_link",
    },
    {
      id: 12,
      title: "Telco Customer Churn Prediction",
      description: "This project aims to develop a predictive model to predict customer churn in Telco company, which will help us identify customers who are likely to leave the company.",
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
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="flex items-center justify-between w-full">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "p-2 rounded-full bg-primary text-muted shadow transition hover:bg-muted/80 flex-shrink-0",
              currentIndex === 0 && "opacity-30 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="flex-1 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {visibleProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden flex flex-col h-full bg-muted">
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
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-muted shadow hover:shadow-md transition"
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

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex + projectsPerPage >= projects.length}
            className={cn(
              "p-2 rounded-full bg-primary text-muted shadow transition hover:bg-muted/80 flex-shrink-0",
              currentIndex + projectsPerPage >= projects.length && "opacity-30 cursor-not-allowed"
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