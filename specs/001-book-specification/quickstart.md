# Quickstart Guide: Physical AI & Humanoid Robotics — Essentials

## Overview
This quickstart guide provides immediate setup instructions for the Physical AI & Humanoid Robotics textbook project. This Docusaurus-based book contains 6 chapters with 3 lessons each, optimized for both learning and RAG (Retrieval Augmented Generation) systems.

## Prerequisites
- Node.js (LTS version 18 or higher)
- npm or yarn package manager
- Git

## Setup Instructions

### 1. Clone or Initialize the Repository
```bash
# If starting fresh
npx create-docusaurus@latest website classic
cd website

# Or clone existing repository
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm start
# or
yarn start
```

This command starts a local development server and opens the application in your browser at `http://localhost:3000`.

### 4. Project Structure
The book content is organized as follows:
```
docs/
├── introduction/                 # Chapter 1: Introduction to Physical AI
│   ├── lesson-1.1-what-is-physical-ai.md
│   ├── lesson-1.2-history-ai-robotics.md
│   └── lesson-1.3-components-physical-ai.md
├── humanoid-robotics/            # Chapter 2: Basics of Humanoid Robotics
│   ├── lesson-2.1-anatomy-humanoid.md
│   ├── lesson-2.2-kinematics-dynamics.md
│   └── lesson-2.3-control-architectures.md
# ... additional chapters following the same pattern
└── intro.md                     # Homepage
```

### 5. Adding New Content
To create a new lesson:
1. Create a new Markdown file in the appropriate chapter directory
2. Follow the naming convention: `lesson-X.Y-short-descriptive-title.md`
3. Include proper frontmatter:

```markdown
---
title: Lesson Title
description: Brief description of the lesson
tags: [tag1, tag2]
sidebar_position: Y
---

# Lesson Title

## Introduction
Brief introduction to the topic...

## Core Concept
Detailed explanation of the main concept...

## Example
Practical example or demonstration...

## Key Takeaway
Summary of important points...
```

### 6. Building for Production
```bash
npm run build
# or
yarn build
```

This command creates an optimized build in the `build/` directory.

### 7. Deploying to GitHub Pages
The site is configured for GitHub Pages deployment. The workflow is typically handled automatically via GitHub Actions when pushing to the main branch, but you can deploy manually with:

```bash
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

## Key Features

### RAG-Ready Content Structure
- Each lesson is structured with clear headings and sections
- Content is chunk-friendly for vector embeddings
- Metadata supports retrieval systems

### Navigation
- Sidebar organized by chapters and lessons
- Previous/Next navigation between lessons
- Search functionality across all content

### Custom Components
- AI Chat Widget for RAG integration (to be implemented)
- Responsive design for all device sizes
- Clean, readable typography optimized for learning

## Configuration
Key configuration files:
- `docusaurus.config.js`: Site metadata, navbar, footer, plugins
- `sidebars.js`: Navigation structure
- `src/css/custom.css`: Custom styling

## Troubleshooting

### Common Issues
1. **Development server won't start**: Ensure Node.js LTS version is installed
2. **Build fails**: Check for syntax errors in Markdown files
3. **Images not loading**: Verify image paths are relative to the docs directory

### Getting Help
- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Review the project specification in `specs/1-book-specification/spec.md`
- Consult the implementation plan in `specs/1-book-specification/plan.md`