"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Experience() {
  const [showMore, setShowMore] = useState<Record<number, boolean>>({})
  const [showOrgExperience, setShowOrgExperience] = useState(false)

  const workExperiences = [
    {
      id: 1,
      title: "Data Intelligence Intern",
      company: "PT Astra International Tbk",
      period: "Mar 2025 - May 2025",
      description:
        "As a Data Intelligence Intern at PT Astra International Tbk - Function Group Digital Strategy, I supported several projects and learned about the team's end-to-end workflows.",
      longDescription:
        "As a Data Intelligence Intern at PT Astra International Tbk - Function Group Digital Strategy, I supported several projects and learned about the team's end-to-end workflows.\n\n1. Completed a comprehensive training program covering end-to-end team workflows, including problem farming, project management, data products, data governance, data engineering, data analytics, data visualization, experimentation, and data storytelling.\n2. Contributed to SPLASH, a sales planning tool that identifies promising regions for business expansion in Indonesia. Responsibilities included conducting industry research, sourcing and analyzing datasets, creating and validating proxies, building time series models, and visualizing insights using Power BI.\n3. Developed a blueprint for a Product Knowledge Chatbot, including an admin panel that enables users to ask company-related questions and allows administrators to monitor chatbot performance and user interactions.",
      image: "/ai.png",
    },
    {
      id: 2,
      title: "Digital Project Consultant",
      company: "PT Astra International Tbk - TSO Auto2000",
      period: "Jun 2024 - Nov 2024",
      description:
        "As part of the Astra1st program, I was placed in the Digital Product Department of PT Astra International Tbk - TSO Auto2000, one of Indonesia's largest Toyota dealerships.",
      longDescription:
        "As part of the Astra1st program, I was placed in the Digital Product Department of PT Astra International Tbk - TSO Auto2000, one of Indonesia's largest Toyota dealerships.\n\n1. Identified, assessed, developed, tested, and implemented Robotic Process Automation (RPA) using UiPath to automate 6 processes across 2 departments. Delivered a 94% improvement in time efficiency, significantly reducing manual effort and enhancing productivity.\n2. Designed and developed 6 interactive Power BI dashboards as an end product of the RPA solution to support strategic decision-making through clear visualizations.\n3. Developed automation scripts to streamline the generation of trend discount reports and performance reports for Ruang Kompetensi, reducing manual effort and ensuring consistent accuracy.",
      image: "/a2k.png",
    },
    {
      id: 3,
      title: "Data Engineer Intern",
      company: "NTT Ltd.",
      period: "Feb 2024 - Feb 2025",
      description:
        "As a Data Engineer Intern at NTT Indonesia Technology, I focused on learning modern data engineering tools and concepts while supporting the team through research and documentation tasks.",
      longDescription:
        "As a Data Engineer Intern at NTT Indonesia Technology, I focused on learning modern data engineering tools and concepts while supporting the team through research and documentation tasks.\n\n1. Explored data processing technologies, including Microsoft Fabric, Talend, Informatica and studied data engineering concepts such as Slowly Changing Dimension (SCD) and Change Data Capture (CDC) to deepen understanding of modern data engineering workflows and data management best practices.\n2. Assisted the team in preparing technical presentations and documentation related to data solutions.\n3. Supported the presales team by contributing to materials for data solution proposals to clients.",
      image: "/ntt.png",
    },
    {
      id: 4,
      title: "Pharmacy Key Account Intern",
      company: "Abbott",
      period: "Jul 2023 - Dec 2023",
      description:
        "Abbott is a global healthcare company that helps people live healthier lives. They make products like Pediasure and Ensure, which are nutritional drinks for kids and adults. As an intern at Abbott, I report to the Pharmacy Key Account Manager (KAM).",
      longDescription:
        "Abbott is a global healthcare company that helps people live healthier lives. They make products like Pediasure and Ensure, which are nutritional drinks for kids and adults. As an intern at Abbott, I report to the Pharmacy Key Account Manager (KAM).\n\n1. Develop three easy-to-use dashboards to simplify Sell-In and Sell-Out analysis for pharmacy channel stakeholders, empowering them to make informed decisions.\n2. Work closely with the shopper insight and analytics manager to analyze and prepare sales data, including sell-in, sell-out, and paid sampling, to be presented at the Business Plan 2024 meeting.\n3. Collaborate with a third-party partner and the sales force effectiveness (SFE) manager to analyze the correlation between specific promotions and product sales.\n4. Study and predict future sales for each product and account to optimize the pharmacy channel strategy by analyzing and forecasting previous months sales data.\n5. Analyze stock on hand (SOH) and offtake data to identify trends and opportunities, and design effective promotions that drive sales growth.\n6. Analyze the sell-in data of a specific account and design the monthly sales plan based on the trading terms for that account.\n7. Collaborate with a third-party partner to analyze and update the weekly performance of all district sales managers (DSMs) based on the achievements of the pharmaceutical market representatives (PMRs) they manage during specific promotions.\n8. Analyze and update daily sales data to track the achievements of all area sales managers (ASMs) in each pharmacy account they manage.\n9. Regularly update the master data to properly classify and segment new open outlets in the pharmacy channel.\n10. Create and manage promotional cooperation letter for all pharma chain accounts, ensuring timely approval and execution of every promotion.\n11. Work closely with various stakeholders to address any claim issues related to all accounts in the pharmacy channel.ms and conducted experiments. Co-authored a research paper published in a peer-reviewed journal. Developed data preprocessing pipelines for image datasets. Presented research findings at departmental seminars.",
      image: "/abbott.png",
    },
  ]

  // const orgExperiences = [
  //   {
  //     id: 5,
  //     title: "Tech Lead",
  //     organization: "Student Organization A",
  //     period: "Aug 2021 - May 2022",
  //     description:
  //       "Led a team of student developers in creating web applications for campus events. Mentored junior members in software development practices.",
  //     image: "/placeholder.svg?height=100&width=100",
  //   },
  //   {
  //     id: 6,
  //     title: "Volunteer",
  //     organization: "Non-profit Organization",
  //     period: "Jun 2021 - Aug 2021",
  //     description:
  //       "Developed data visualization tools for a non-profit organization. Helped analyze program effectiveness and impact metrics.",
  //     image: "/placeholder.svg?height=100&width=100",
  //   },
  // ]

  const toggleShowMore = (id: number) => {
    setShowMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiences</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Experience Timeline */}
          <div className="relative">
            {workExperiences.map((exp, index) => (
              <div key={exp.id} className="mb-8 relative">
                <Card className="bg-muted border border-muted shadow-none">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mt-1">
                      <Image
                        src={exp.image || '/placeholder.svg?height=48&width=48'}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="mb-1">{exp.title}</CardTitle>
                          <CardDescription>
                            {exp.company} • {exp.period}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {showMore[exp.id] ? exp.longDescription : exp.description}
                    </p>
                    {exp.longDescription !== exp.description && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 flex items-center gap-1 pl-0 justify-start"
                        onClick={() => toggleShowMore(exp.id)}
                      >
                        {showMore[exp.id] ? (
                          <>
                            Show less
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show more
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Organizational & Volunteer Experience */}
          {/* <div className="w-full">
            <Button
              variant="outline"
              className="w-full bg-muted flex items-center justify-center gap-2"
              onClick={() => setShowOrgExperience(!showOrgExperience)}
            >
              {showOrgExperience ? "Hide" : "Show"} Organizational & Volunteer Experience
              {showOrgExperience ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {showOrgExperience && (
              <div className="mt-6 space-y-6">
                {orgExperiences.map((exp) => (
                  <Card key={exp.id} className="bg-muted border border-muted shadow-none">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mt-1">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={exp.organization}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle>{exp.title}</CardTitle>
                            <CardDescription>
                              {exp.organization} • {exp.period}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  )
}
