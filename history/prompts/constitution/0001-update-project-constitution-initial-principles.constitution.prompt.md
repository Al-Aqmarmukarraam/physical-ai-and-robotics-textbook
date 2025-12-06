---
id: 0001
title: Update project constitution with initial principles
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20251101
feature: none
branch: master
user: unknown
command: /sp.constitution
labels: ["constitution", "project-setup", "principles"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

# Project Constitution: Physical AI & Humanoid Robotics — Essentials

## Project Name
Physical AI & Humanoid Robotics — Essentials

## Purpose
Create a short, clean, professional AI-Native textbook based on the Physical AI & Humanoid Robotics course.
The book must be fast, simple, accurate, minimal, and fully deployable on GitHub Pages with an integrated free-tier RAG chatbot.

## Scope
### Book Structure (6 Chapters)
1. Introduction to Physical AI
2. Basics of Humanoid Robotics
3. ROS 2 Fundamentals
4. Digital Twin Simulation (Gazebo + Isaac)
5. Vision-Language-Action Systems
6. Capstone: Simple AI-Robot Pipeline

### Requirements
- Clean and modern Docusaurus UI
- Lightweight content, short chapters, minimal jargon
- Free-tier friendly workflow
- Lightweight embeddings for RAG
- RAG answers must only use book text

## Core Principles
- Simplicity
- Accuracy
- Minimalism
- Fast builds
- Free-tier architecture
- High-quality writing
- Smart structure
- Zero unnecessary complexity

## Key Features
- Docusaurus textbook
- RAG chatbot using Qdrant + Neon + FastAPI
- Select-Text → Ask AI integration
- Optional Urdu + personalization layer
- Works smoothly on GitHub Pages
- No GPU requirements

## Constraints
- No heavy GPU usage
- Minimal embeddings
- Free-tier database + vector storage
- Minimal JS, minimal plugins
- Only use content inside the book for RAG answers

## Success Criteria
- Successful Docusaurus build
- Clean, modern UI
- Smooth GitHub Pages deployment
- Fast, accurate RAG chatbot
- Book is readable, short, practical, and high-quality

## Deliverables
- Docusaurus project
- 6-chapter textbook
- Full RAG backend (FastAPI + Qdrant + Neon)
- Deployment configuration
- Constitution-compliant output from Spec-Kit Plus

## Response snapshot

The project constitution was updated to version 1.0.0, establishing initial project principles and guidelines, and including sections for scope, requirements, features, and constraints. A list of dependent files requiring manual updates was provided.

## Outcome

- ✅ Impact: Updated `.specify/memory/constitution.md` with new project principles and structure.
- 🧪 Tests: No tests were run.
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: Manual updates to template files and creation of a git commit.
- 🧠 Reflection: The shell script for PHR creation failed, requiring manual agent-native PHR generation. This highlights a need for robust fallback mechanisms or improved script execution in restricted environments.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script failed with "No such file or directory" and "Permission denied" errors.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate the cause of the `create-phr.sh` script failure and enhance error handling or provide a more reliable agent-native PHR creation process.
