import React from "react";
import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";

const ExperiencePage = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Engineer",
      company: "Footasylum",
      location: "Manchester, UK",
      period: "Aug 2025 - Present",
      description: "Building and maintaining automated ELT pipelines using Azure Data Factory and SQL Database, ingesting finance records into cloud-based Azure data platform with medallion architecture.",
      skills: ["Azure Data Factory", "Azure Databricks","Python","SQL","Pyspark", "Delta Lake", "Power BI"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Data Engineer",
      company: "Agilitics",
      location: "Remote, UK",
      period: "Jan 2025 - Aug 2025",
      description: "Engineered transformation and CDC logic using T-SQL and MD5 hashing. Designed and deployed a scalable RAG chatbot using LangChain, OpenAI, and Qdrant, reducing support ticket resolution time by 40%.",
      skills: ["Python","SQL","Azure Data Factory", "LangChain", "OpenAI", "Qdrant", "FastAPI"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Data Engineer",
      company: "Open Insight",
      location: "Remote, India",
      period: "Apr 2022 - Jun 2023",
      description: "Designed and implemented 40+ business-critical KPIs using PySpark and Azure Databricks, generating £500K in incremental revenue. Boosted pipeline performance by 50% by optimising joins and caching.",
      skills: ["PySpark", "Azure Databricks", "ADLS Gen2", "Delta Lake", "GitLab CI/CD"],
      icon: FaBriefcase
    },
    {
      type: "work",
      title: "Associate Analyst",
      company: "Mastech Infotrellis",
      location: "India",
      period: "Sep 2020 - Mar 2022",
      description: "Led end-to-end migration of 50M+ records for DELL Technologies, improving data accuracy from 80% to 99.9%. Reduced batch processing time by 50% through automated ETL pipelines with Python and SQL.",
      skills: ["Python", "SQL", "REST API", "GitLab CI/CD", "Azure DevOps"],
      icon: FaBriefcase
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-foreground/70 text-lg">My professional journey in data engineering</p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-12 h-12 rounded-full bg-chart-5 border-4 border-background flex items-center justify-center">
                    <FaBriefcase className="text-main-foreground" size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-main font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-foreground/80 font-semibold mb-2">{exp.company} • {exp.location}</p>
                    <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-chart-5/20 text-foreground text-xs rounded border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ExperiencePage;
