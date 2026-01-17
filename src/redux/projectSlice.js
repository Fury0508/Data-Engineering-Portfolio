// src/redux/projectSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Static project data
const staticProjects = [
  {
    id: 1,
    category: "GenAI",
    title: "LLM-Based Data Quality Analyser",
    description: "Built a GenAI tool to analyse CSV and Parquet files stored in Amazon S3, detecting nulls, outliers, and structural anomalies using FastAPI and Pandas. Enabled 70% faster QA checks by generating natural language summaries and automated fixes through a user-friendly Streamlit UI.",
    techstacks: ["GenAI", "FastAPI", "OpenAI", "Hugging Face", "Streamlit", "AWS Bedrock", "Pandas"],
    link: "https://github.com/Fury0508",
  },
  {
    id: 2,
    category: "Data Engineering",
    title: "Customer360",
    description: "Built an event-triggered pipeline to validate and route incoming CSV order files using Azure Data Factory and Databricks, securely managing credentials via Azure Key Vault. Automated the ingestion and transformation of multi-source datasets using PySpark and SQL.",
    techstacks: ["Azure Data Factory", "Azure Databricks", "ADLS Gen2", "PySpark", "SQL", "Key Vault"],
    link: "https://github.com/Fury0508",
  },
  {
    id: 3,
    category: "GenAI",
    title: "RAG Chatbot for Internal Documents",
    description: "Designed and deployed a scalable retrieval-augmented generation (RAG) chatbot using FastAPI, LangChain, OpenAI, and Qdrant, enabling over 500 users to query internal documents in natural language, reducing support ticket resolution time by 40%.",
    techstacks: ["FastAPI", "LangChain", "OpenAI", "Qdrant", "RAG", "Vector Database"],
    link: "https://github.com/Fury0508",
  },
  {
    id: 4,
    category: "Data Engineering",
    title: "Finance Data Mart & Reporting",
    description: "Delivered a production-grade finance data mart and Power BI reporting solution by modeling segmented customer and company code-level metrics, powering dashboards for financial planning and analysis across 20+ regional business units.",
    techstacks: ["Azure SQL", "T-SQL", "Delta Lake", "Power BI", "Medallion Architecture"],
    link: "https://github.com/Fury0508",
  },
  {
    id: 5,
    category: "Data Engineering",
    title: "Telecom KPI Analytics Platform",
    description: "Designed and implemented 40+ business-critical KPIs by analysing 400K user records for 2nd largest telecoms in Thailand using PySpark and Azure Databricks, directly informing targeting strategies that generated £500K in incremental revenue.",
    techstacks: ["PySpark", "Azure Databricks", "ADLS Gen2", "Delta Lake", "Power BI", "GitLab CI/CD"],
    link: "https://github.com/Fury0508",
  },
  {
    id: 6,
    category: "Data Engineering",
    title: "DELL Data Migration Platform",
    description: "Led end-to-end migration of 50M+ records for DELL Technologies from Oracle databases to a unified global system across EMEA, APJ, and LATAM, improving data accuracy from 80% to 99.9% using robust validation and reconciliation methods.",
    techstacks: ["Python", "SQL", "Oracle", "REST API", "GitLab CI/CD", "Azure DevOps"],
    link: "https://github.com/Fury0508",
  },
];

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return staticProjects;
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
