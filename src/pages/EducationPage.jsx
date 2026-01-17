import React from "react";
import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa";

const EducationPage = () => {
  const education = [
    {
      title: "Masters in Computer Science",
      institution: "University of Glasgow",
      location: "Glasgow, UK",
      period: "2023 - 2024",
      description: "Advanced studies in computer science and data engineering, focusing on building scalable data pipelines .",
      skills: ["Data pipeline design and implementation", "Data Warehousing", "ETL/ELT development", "GenAI", "Research"]
    },
    {
      title: "Bachelor in Computer Science",
      institution: "SRM University",
      location: "Delhi, India",
      period: "2016 - 2020",
      description: "Built a strong foundation in computer science fundamentals, databases, and programming that laid the groundwork for my data engineering career.",
      skills: ["Database Management System", "Programming", "Problem-solving", "Computational Methods", "Research"]
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
          <h1 className="text-4xl font-bold mb-4">Education</h1>
          <p className="text-foreground/70 text-lg">My academic journey and continuous learning</p>
        </motion.div>

        {/* Education Cards */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Academic Background</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-main border-2 border-border flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-main-foreground" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{edu.title}</h3>
                        <p className="text-foreground/80 font-semibold">{edu.institution} • {edu.location}</p>
                      </div>
                      <span className="text-sm text-main font-semibold bg-main/20 px-3 py-1 rounded border border-border">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-main/10 text-foreground text-xs rounded border border-border"
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

        {/* Academic Skills & Achievements */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Academic Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-4 text-main">Data Engineering</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">ETL/ELT Pipeline Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Data Warehousing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Data Modelling</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-4 text-main">Big Data & Cloud</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Distributed Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Cloud Platforms (Azure/GCP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Spark</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <h3 className="font-bold text-lg mb-4 text-main">Databases & SQL</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">SQL & Query Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">NoSQL Databases</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-main rounded-full"></div>
                  <span className="text-foreground/80 text-sm">Data Lake Architecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default EducationPage;