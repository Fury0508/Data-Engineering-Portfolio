// All site content lives here. Update this file when your résumé changes.

export const profile = {
  name: "Dhananjay Gupta",
  role: "Data Engineer",
  location: "Manchester, UK",
  email: "guptadhananjay090@gmail.com",
  resume: "/Dhananjay_Gupta_Resume.pdf",
  avatar: "/avatar.jpg",
  links: {
    github: "https://github.com/Fury0508",
    linkedin: "https://www.linkedin.com/in/dhananjay-g/",
    calendly: "https://calendly.com/daan0508/30min",
  },
  headline:
    "I build and optimise production data pipelines on Azure Databricks and Google Cloud: batch and streaming, incremental, restart-safe and tested.",
  credentials: [
    "Databricks Certified Data Engineer Professional",
    "Google Cloud Professional Data Engineer",
  ],
  about: [
    "I'm a data engineer with 4+ years of experience building production pipelines in Python, SQL, PySpark and Apache Spark. Most of my work is on Azure Databricks: lakehouses, incremental and streaming ingestion, change data capture and the dimensional models that BI teams report from.",
    "At Footasylum I've delivered 25+ pipelines, led the migration of 100+ Delta tables to Unity Catalog, and cut nightly processing time by 43%. Before that I migrated 50M+ records for Dell Technologies across three regions at 99.9% accuracy.",
    "I care about the parts that make data reliable: idempotent MERGE logic, data quality checks, reconciliation, CI/CD and monitoring. I've also contributed four merged pull requests to Apache Airflow.",
  ],
};

export const metrics = [
  { value: "4+", label: "years building production pipelines" },
  { value: "25+", label: "incremental pipelines delivered" },
  { value: "100+", label: "Delta tables migrated to Unity Catalog" },
  { value: "43%", label: "faster nightly processing (7h → 4h)" },
  { value: "60 → 10", label: "minutes of sales data latency" },
];

// The stages shown in the hero pipeline diagram.
export const pipelineStages = [
  { key: "sources", label: "Sources", tools: ["Dynamics 365", "Oracle", "Event Hubs"] },
  { key: "ingest", label: "Ingest", tools: ["Data Factory", "Auto Loader"] },
  { key: "bronze", label: "Bronze", tools: ["raw, as received"] },
  { key: "silver", label: "Silver", tools: ["deduplicated, validated"] },
  { key: "gold", label: "Gold", tools: ["dimensional models"] },
  { key: "serve", label: "Serve", tools: ["Power BI", "AI/BI Genie"] },
];

export const experience = [
  {
    role: "Data Engineer",
    company: "Footasylum",
    location: "Manchester, UK",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Led the migration of 100+ Delta tables to Unity Catalog and Databricks Runtime 17.1, covering catalogue design, access controls and reconciliation over three weeks of parallel production; cut nightly processing from 7 to 4 hours (43%).",
      "Automated CI/CD with Azure DevOps and Databricks Asset Bundles: validated releases across dev, test and prod with environment-specific config and production approvals.",
      "Engineered serverless streaming pipelines with Spark, Auto Loader and Spark Declarative Pipelines, with row-hash deduplication and data quality checks, reducing sales data latency from 60 to 10 minutes.",
      "Delivered 25+ incremental ETL pipelines in Azure Data Factory for Dynamics 365 Business Central, with exception handling and recovery controls that cut production recovery from 7 hours to under 1.",
      "Implemented idempotent Delta MERGE processing across 20+ notebooks and 10 entities, making a six-hour pipeline restart-safe and protecting the 8 AM BI reporting SLA.",
      "Analysed 600+ nightly runs with KQL and Power BI to find bottlenecks, cutting a critical notebook from 110 to 25 minutes (77%); fixed Unicode encoding issues across 200K SKU records.",
      "Built a multi-agent analytics app with Databricks AI/BI Genie and Claude over 3M+ records, reducing analyst turnaround by 60%; mentor two junior engineers.",
    ],
    stack: ["Azure Databricks", "Unity Catalog", "Delta Lake", "Auto Loader", "Spark Declarative Pipelines", "Azure Data Factory", "Asset Bundles", "Azure DevOps", "KQL"],
  },
  {
    role: "Data Engineer (Contract)",
    company: "Agilitics",
    location: "UK",
    period: "Jan 2025 – Jul 2025",
    points: [
      "Built automated ELT pipelines in BigQuery ingesting 3M+ financial records from Oracle, using incremental processing and SCD Type 2 modelling.",
      "Implemented CDC and SQL transformation logic with MD5 hashing in BigQuery staging layers for consistent revenue and billing data.",
      "Developed a finance data mart and Power BI dashboards for 20+ regional business units, tracking customer activity, rates and month-on-month GL trends.",
      "Built a RAG documentation chatbot (LangChain, OpenAI, Qdrant) for 500+ users, cutting support ticket resolution time by 40%.",
    ],
    stack: ["BigQuery", "Oracle", "SQL", "SCD Type 2", "CDC", "Power BI", "LangChain", "Qdrant"],
  },
  {
    role: "Data Engineer",
    company: "Open Insight",
    location: "India",
    period: "Apr 2022 – Jun 2023",
    points: [
      "Developed production ETL pipelines integrating 15+ sources with PySpark, SQL and Delta Lake on Azure Databricks.",
      "Processed 10M+ customer records into 40+ telecom KPIs that supported targeted marketing worth £500K in incremental revenue.",
      "Tuned Spark workloads (joins, caching, transformation redesign) to cut pipeline runtime by ~40%, from 20+ to under 12 hours.",
      "Built near-real-time KPI reporting and customer segmentation feeding Power BI; mentored two interns on Databricks and PySpark.",
    ],
    stack: ["PySpark", "Azure Databricks", "Delta Lake", "SQL", "Power BI"],
  },
  {
    role: "Associate Analyst",
    company: "Mastech InfoTrellis",
    client: "Dell Technologies",
    location: "India",
    period: "Sep 2020 – Mar 2022",
    points: [
      "Led the migration of 50M+ customer, address and credit records from Oracle to a unified global platform across EMEA, APJ and LATAM, raising data accuracy from 80% to 99.9%.",
      "Automated Python ETL with REST APIs, incremental ingestion and parallel processing, halving batch time (4h → 2h) across three regions.",
      "Built transformation workflows with business rules, schema validation and data quality checks, tested with pytest in GitLab CI/CD.",
    ],
    stack: ["Python", "Oracle", "SQL", "REST APIs", "pytest", "GitLab CI/CD", "Azure DevOps"],
  },
];

export const featuredProject = {
  title: "Flood Monitoring Lakehouse",
  tagline:
    "A scheduled Databricks pipeline that ingests the Environment Agency's real-time flood monitoring API into a medallion lakehouse on Unity Catalog.",
  link: "https://github.com/Fury0508/flood-monitoring-pipeline",
  flow: ["REST API", "Landing volume", "Bronze", "Silver", "Gold star schema"],
  highlights: [
    "One bulk call per day (~490K readings in 14s) instead of 5,500+ per-station calls",
    "Idempotent MERGE with a 3-day re-fetch window to pick up late-arriving readings",
    "Invalid rows go to a quarantine table with a reason; the rest of the batch still loads",
    "SCD Type 2 station dimension, per-measure watermarks and a catch-up job for silent stations",
    "Every API response checked for silent truncation; every run logged to an ops table",
    "Notebooks tested unchanged on open-source Spark in CI; deployed with Asset Bundles",
  ],
  stack: ["Databricks", "Unity Catalog", "Delta Lake", "Spark SQL", "PySpark", "Asset Bundles", "pytest", "GitHub Actions"],
};

export const projects = [
  {
    category: "Real-time streaming",
    title: "Loan Fraud Monitoring",
    description:
      "Real-time transaction monitoring for low-latency fraud analysis, with bronze, silver and gold layers turning streaming transactions into analytics-ready data for Power BI.",
    flow: ["Event Hubs", "Eventstream", "Eventhouse", "Power BI"],
    stack: ["Azure Event Hubs", "Eventstream", "Eventhouse", "KQL", "Power BI"],
  },
  {
    category: "Batch ingestion",
    title: "Customer360",
    description:
      "Event-triggered workflow that validates and routes incoming CSV order files, then runs multi-source PySpark transformations into validated customer-level datasets. Credentials kept in Key Vault.",
    flow: ["Blob event", "Data Factory", "Databricks", "ADLS Gen2"],
    stack: ["Azure Data Factory", "Azure Databricks", "ADLS Gen2", "PySpark", "SQL", "Key Vault"],
  },
  {
    category: "Open source",
    title: "Apache Airflow contributor",
    description:
      "Four merged pull requests to Apache Airflow, the open-source workflow orchestrator used by data teams worldwide.",
    flow: ["Issue", "Fix", "Review", "Merged"],
    stack: ["Python", "Apache Airflow"],
    link: "https://github.com/apache/airflow/pulls?q=is%3Apr+author%3AFury0508+is%3Amerged",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "PySpark", "Bash", "KQL"] },
  { group: "Platforms", items: ["Azure Databricks", "Azure Data Factory", "ADLS Gen2", "Unity Catalog", "Azure Event Hubs", "Google Cloud", "BigQuery", "Oracle"] },
  { group: "Processing", items: ["Apache Spark", "Spark Structured Streaming", "Auto Loader", "Spark Declarative Pipelines (DLT)", "Apache Airflow"] },
  { group: "Data engineering", items: ["ETL / ELT", "Batch & streaming", "Incremental loading", "CDC", "Delta MERGE", "Medallion architecture", "Dimensional modelling", "SCD Type 2", "Data quality", "Reconciliation"] },
  { group: "DevOps & monitoring", items: ["Azure DevOps", "Git", "GitLab CI/CD", "Databricks Asset Bundles", "Terraform", "pytest", "Pipeline monitoring", "Performance tuning"] },
  { group: "BI & AI", items: ["Power BI", "Databricks AI/BI Genie", "LangChain", "OpenAI", "Qdrant"] },
];

export const certifications = [
  { name: "Data Engineer Professional", issuer: "Databricks", date: "Feb 2026" },
  { name: "Professional Data Engineer", issuer: "Google Cloud", date: "Jul 2025" },
  { name: "Certified Professional Services Engineer", issuer: "GitLab" },
];

export const education = [
  { degree: "MSc Computer Science", school: "University of Glasgow", location: "Glasgow, UK", period: "Sep 2023 – Sep 2024" },
  { degree: "B.Tech Computer Science", school: "SRM University", location: "India", period: "Aug 2016 – Aug 2020" },
];
