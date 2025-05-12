import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, FileIcon as FilePresentation } from "lucide-react"

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
      description: "A Streamlit web app that predicts the dog breed from an image (upload, camera, url) using a fine-tuned AlexNet model. Supports 10 dog breeds: Beagle, Chihuahua, Corgi, Dalmation, Doberman, Golden Retriever, Maltese, Poodle, Shiba Inu, and Siberian Husky.",
      image: "/dogBreedClassifierz.jpg",
      github: "https://github.com/pramudyalyza/dogBreedClassifierz",
      demo: "http://dogbreedclassifierz.streamlit.app/",
      presentation: "https://drive.google.com/file/d/1jZEHkyWy7iQkgJOZ4ZLtDZ_HLE9ZF5EM/view?usp=drive_link",
    },
    {
      id: 4,
      title: "IKN Sentiment App",
      description: "The IKN Sentiment App is a simple tool that tracks public sentiment on Indonesia's new capital (IKN). It automatically collects YouTube comments, cleans the data, and uses machine learning to predict the sentiment. Users can view daily update sentiment trends through a dashboard or input their own comments for instant sentiment predictions.",
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
      description: "This project aims to analyze the impact of weather and socioeconomic factors on COVID-19 cases in the United States. In addition, I also developed a comprehensive interactive dashboard to visualize the findings and make them accessible to a wide audience.",
      image: "/covid.png",
      github: "https://github.com/pramudyalyza/COVID19_in_US_Weather_Socioeconomic_Factors",
      demo: "https://bit.ly/AlyzaProject02-Tableau",
      presentation: "https://drive.google.com/file/d/1P_2zLRi4VjabM4zxgM5g5A-pAzT90SUu/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Urban Visual Pollutants Detection",
      description: "This project aims to develop a system to detect and classify urban visual pollutants in images. The system is trained on a dataset of images of urban visual pollutants, including graffiti, faded signage, potholes, garbage, construction road, bad streetlight, bad billboard, sand on road, and clutter sidewalk.",
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
      description: "This project focuses on classifying the diabetes outcome and predicting the value of diabetes pedigree function. The dataset includes information like the number of pregnancies, blood glucose level, blood pressure, skin thickness, insulin level, BMI, diabetes pedigree function, age, and the diabetes outcome",
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

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full bg-muted">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
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
                    className="p-2 rounded-full hover:bg-muted transition-colors text-primary"
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
    </section>
  )
}
