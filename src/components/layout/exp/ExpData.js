// ExpData.js
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaPython,
  FaBrain,
  FaDatabase,
  FaProjectDiagram,
  FaSearch,
} from "react-icons/fa";
import {SiOpenai, SiGraphql, SiD3Dotjs} from "react-icons/si";

export const ExpData = [
  {
    company: "Hubble42 Inc.",
    jobtitle: "Sr. Full Stack Developer – AI Developer | Mar 2021 - Present",
    desc: "Spearheaded the development of Agentic AI platforms with LangChain, LangGraph, and vector stores. Designed and deployed RAG-based assistants with embeddings, semantic retrieval, and context-aware reasoning. Integrated LLM APIs (OpenAI, Cohere) into real-time platforms, built scalable microservices with Docker + AWS ECS, and exposed GraphQL/REST APIs for multi-tenant client platforms.",
    iconNames: [FaBrain, FaProjectDiagram, SiOpenai, FaDocker, FaAws, SiGraphql],
    label: ["Agentic AI", "LangGraph", "OpenAI", "Docker", "AWS", "GraphQL"],
  },
  {
    company: "Turing",
    jobtitle: "Software Engineer – AI/NLP Focus | May 2023 - May 2026",
    desc: "Built and optimized retrieval-augmented generation (RAG) pipelines for summarization, semantic search, and knowledge retrieval. Developed memory modules and function-calling APIs for contextual continuity, and designed evaluation frameworks for hallucination detection. Ran prompt engineering and fine-tuning across GPT-3, GPT-Neo, and Hugging Face models, and built React.js + D3.js dashboards to monitor LLM performance.",
    iconNames: [FaSearch, FaBrain, FaReact, SiD3Dotjs, FaPython],
    label: ["RAG", "LLMs", "React.js", "D3.js", "Python"],
  },
  {
    company: "Contour Software Pvt. Ltd",
    jobtitle: "Full Stack Developer | Mar 2020 - Jan 2021",
    desc: "Built production-ready applications with React.js on the frontend and Node.js on the backend, backed by SQL-driven data models. Designed authentication and data pipelines for secure, scalable client operations, deployed apps in Dockerized environments with CI/CD workflows, and collaborated with UI/UX teams to deliver responsive, high-performance experiences.",
    iconNames: [FaReact, FaNodeJs, FaDatabase, FaDocker, FaGithub],
    label: ["React.js", "Node.js", "SQL", "Docker", "Git"],
  },
];
