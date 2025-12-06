# Implementation Plan: Physical AI & Humanoid Robotics — Essentials Book in Docusaurus

**Branch**: `1-book-specification` | **Date**: 2025-12-06 | **Spec**: [specs/1-book-specification/spec.md](../1-book-specification/spec.md)
**Input**: Feature specification from `/specs/1-book-specification/spec.md`

## Summary

Development of a comprehensive textbook on Physical AI and Humanoid Robotics using Docusaurus as the documentation framework. The book will contain 6 chapters with 3 lessons each, following a structured format optimized for both human reading and RAG (Retrieval Augmented Generation) systems. The implementation will prioritize simplicity, accuracy, and minimalism as outlined in the project constitution, with all components designed to work within free-tier service limits.

## Technical Context

**Language/Version**: JavaScript/Node.js (Node LTS version 18+)
**Primary Dependencies**: Docusaurus 2.x, React, Node.js, npm/yarn
**Storage**: Git-based version control (GitHub), content stored in Markdown files
**Testing**: Docusaurus built-in development server, manual content verification
**Target Platform**: GitHub Pages (web-based), compatible with modern browsers
**Project Type**: Static site generation (web)
**Performance Goals**: Fast build times (<5 minutes), fast page loads (<2 seconds initial), optimized for GitHub Pages hosting
**Constraints**: Must work within GitHub Pages free tier, minimal JavaScript, optimized for RAG chunking, no heavy computational requirements
**Scale/Scope**: 6 chapters × 3 lessons = 18 lessons, plus supplementary content, designed for educational use

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ✅ **Simplicity**: Docusaurus is a straightforward static site generator with clear documentation and minimal complexity
- ✅ **Accuracy**: Content will be fact-checked and maintained with version control for accuracy
- ✅ **Minimalism**: Docusaurus has minimal dependencies and overhead, with clean default themes
- ✅ **Fast Builds**: Docusaurus is optimized for fast builds, with incremental builds for development
- ✅ **Free-tier Architecture**: Docusaurus sites can be hosted for free on GitHub Pages
- ✅ **High-quality writing**: Docusaurus supports rich Markdown for professional content presentation
- ✅ **Smart Structure**: Docusaurus provides intuitive navigation and sidebar organization
- ✅ **Zero unnecessary complexity**: Static site generation avoids server-side complexity

## Project Structure

### Documentation (this feature)

```text
specs/1-book-specification/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
docs/
├── introduction/                 # Chapter 1: Introduction to Physical AI
│   ├── lesson-1.1-what-is-physical-ai.md
│   ├── lesson-1.2-history-ai-robotics.md
│   └── lesson-1.3-components-physical-ai.md
├── humanoid-robotics/            # Chapter 2: Basics of Humanoid Robotics
│   ├── lesson-2.1-anatomy-humanoid.md
│   ├── lesson-2.2-kinematics-dynamics.md
│   └── lesson-2.3-control-architectures.md
├── ros2-fundamentals/            # Chapter 3: ROS 2 Fundamentals
│   ├── lesson-3.1-introduction-ros2.md
│   ├── lesson-3.2-nodes-topics-services.md
│   └── lesson-3.3-building-basic-packages.md
├── digital-twin-simulation/      # Chapter 4: Digital Twin Simulation (Gazebo + Isaac)
│   ├── lesson-4.1-intro-digital-twins.md
│   ├── lesson-4.2-gazebo-simulation.md
│   └── lesson-4.3-nvidia-isaac-sim.md
├── vision-language-action/       # Chapter 5: Vision-Language-Action Systems
│   ├── lesson-5.1-robot-vision-essentials.md
│   ├── lesson-5.2-nlu-for-robots.md
│   └── lesson-5.3-action-planning-execution.md
├── capstone-pipeline/            # Chapter 6: Capstone: Simple AI-Robot Pipeline
│   ├── lesson-6.1-integrating-vla.md
│   ├── lesson-6.2-basic-task-automation.md
│   └── lesson-6.3-testing-deployment.md
└── intro.md                     # Homepage/introduction to the book

src/
├── components/                   # Custom React components for enhanced functionality
│   └── AIChatWidget/             # Component for RAG chatbot integration
│       ├── AIChatButton.js
│       └── AIChatModal.js
├── pages/                        # Custom pages if needed beyond documentation
└── css/                          # Custom styles to enhance the default Docusaurus theme

static/
├── img/                          # Static images, diagrams, and illustrations
└── assets/                       # Other static assets

babel.config.js                   # Babel configuration for React
docusaurus.config.js              # Main Docusaurus configuration
package.json                      # Project dependencies and scripts
sidebars.js                       # Sidebar navigation configuration
README.md                         # Project overview
```

**Structure Decision**: Single static site project using Docusaurus framework with organized documentation structure following the book's chapter and lesson hierarchy. This structure supports both human-readable navigation and RAG system chunking requirements.

## Implementation Plan: Docusaurus Setup and Configuration

### 1. Docusaurus Setup Steps and Configuration

#### 1.1 Required Installations
- Node.js (LTS version 18+)
- npm or yarn package manager
- Git for version control

#### 1.2 Project Initialization Steps
1. Create a new Docusaurus project:
   ```bash
   npx create-docusaurus@latest website classic
   ```
2. Navigate to the project directory:
   ```bash
   cd website
   ```
3. Install additional dependencies for RAG integration:
   ```bash
   npm install @docusaurus/core @docusaurus/preset-classic @mdx-js/react clsx
   ```

#### 1.3 Essential Config Updates
1. Update `docusaurus.config.js` with site metadata:
   - Site title: "Physical AI & Humanoid Robotics — Essentials"
   - Tagline: "An AI-Native Textbook for Modern Robotics"
   - URL: GitHub Pages URL
   - Base URL: "/"
   - Favicon: Custom favicon

2. Configure navbar in `docusaurus.config.js`:
   - Logo: Project branding
   - Links: Home, Chapters (dropdown), About, GitHub link
   - Search functionality enabled

3. Configure footer in `docusaurus.config.js`:
   - Copyright information
   - Links to relevant resources
   - Social media links

4. Set up plugins for enhanced functionality:
   - Google Analytics (if needed)
   - Sitemap generation
   - Client redirect plugin if needed

#### 1.4 GitHub Pages Deployment Setup
1. Update `docusaurus.config.js` with deployment settings:
   - `organizationName`: GitHub username/organization
   - `projectName`: Repository name
   - `deploymentBranch`: `gh-pages`

2. Create GitHub Actions workflow for automated deployment:
   - Trigger on push to main branch
   - Build and deploy to GitHub Pages
   - Cache dependencies for faster builds

#### 1.5 Settings for Fast Builds and Clean UI
1. Optimize Docusaurus configuration:
   - Enable minification
   - Optimize images
   - Use lightweight themes
   - Minimize custom JavaScript

2. Configure build settings:
   - Use modern bundling techniques
   - Enable compression
   - Optimize for GitHub Pages hosting

### 2. Content Development Phases

#### Phase 1: Chapter Outline Confirmation
- Review and finalize the 6-chapter structure with 3 lessons each
- Confirm lesson titles and descriptions align with learning objectives
- Validate that content meets simplicity and minimalism requirements
- Ensure each lesson follows the standard format: Introduction, Core Concept, Example, Key Takeaway

#### Phase 2: Drafting Lessons (Short + Simple Format)
- Create initial drafts for all 18 lessons following the specified format
- Write in plain language with minimal jargon
- Include relevant code snippets and diagrams where appropriate
- Focus on conceptual understanding over heavy mathematics
- Ensure each lesson is concise and digestible

#### Phase 3: Content Refinement and Consistency Checks
- Review all content for accuracy and consistency
- Standardize terminology across all lessons
- Verify that all lessons meet the writing rules (simplicity, minimalism, accuracy)
- Conduct peer review for technical accuracy
- Optimize content for readability and comprehension

#### Phase 4: RAG-ready Formatting and Chunk Preparation
- Structure content with clear headings and distinct sections for natural chunking
- Add metadata tags for RAG system optimization
- Ensure each logical section is self-contained and understandable
- Format content to be compatible with RAG extraction and indexing
- Create content boundaries that work well for vector embeddings

#### Phase 5: Final Review, Linting, and Publishing
- Conduct final editorial review of all content
- Verify all internal links and navigation work correctly
- Test RAG system integration and response accuracy
- Perform final build and deployment testing
- Publish to GitHub Pages and verify accessibility

### 3. File Structure for Chapters and Lessons

#### 3.1 `/docs` Folder Hierarchy
The documentation folder follows a clear hierarchical structure that maps to the book's organization:

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
├── ros2-fundamentals/            # Chapter 3: ROS 2 Fundamentals
│   ├── lesson-3.1-introduction-ros2.md
│   ├── lesson-3.2-nodes-topics-services.md
│   └── lesson-3.3-building-basic-packages.md
├── digital-twin-simulation/      # Chapter 4: Digital Twin Simulation (Gazebo + Isaac)
│   ├── lesson-4.1-intro-digital-twins.md
│   ├── lesson-4.2-gazebo-simulation.md
│   └── lesson-4.3-nvidia-isaac-sim.md
├── vision-language-action/       # Chapter 5: Vision-Language-Action Systems
│   ├── lesson-5.1-robot-vision-essentials.md
│   ├── lesson-5.2-nlu-for-robots.md
│   └── lesson-5.3-action-planning-execution.md
├── capstone-pipeline/            # Chapter 6: Capstone: Simple AI-Robot Pipeline
│   ├── lesson-6.1-integrating-vla.md
│   ├── lesson-6.2-basic-task-automation.md
│   └── lesson-6.3-testing-deployment.md
└── intro.md                     # Homepage/introduction to the book
```

#### 3.2 Chapter Directories
Each chapter directory contains:
- All lessons belonging to that chapter
- Relevant images or diagrams specific to the chapter
- A README file with chapter summary (optional)

#### 3.3 Lesson File Naming Conventions
- Format: `lesson-X.Y-short-descriptive-slug.md`
- Lowercase with kebab-case separation
- X = chapter number, Y = lesson number
- Descriptive slug that indicates the lesson topic
- Examples:
  - `lesson-1.1-what-is-physical-ai.md`
  - `lesson-2.3-control-architectures.md`
  - `lesson-6.2-basic-task-automation.md`

#### 3.4 Sidebar Organization Rules
- Each chapter corresponds to a primary sidebar category
- Lessons within each chapter nested under their respective chapter in the sidebar
- Sidebar labels match chapter/lesson titles for consistency
- Organized in logical reading order (Chapter 1 through Chapter 6)
- Clear hierarchy showing chapter → lesson structure

#### 3.5 Requirements for Clean URLs and Docusaurus-friendly Markdown
- URLs generated automatically from file paths
- Clean, readable URLs that reflect the content hierarchy
- Markdown files follow Docusaurus standards:
  - Proper frontmatter with title, description, and tags
  - Clear heading hierarchy (H1, H2, H3)
  - Properly formatted code blocks with syntax highlighting
  - Optimized images with alt text
  - Relative links for internal navigation
- Each lesson file contains:
  - Frontmatter with metadata for RAG system
  - Clear H1 title matching the lesson title
  - Structured content with appropriate headings
  - Content formatted for both human reading and RAG extraction

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |

All implementation decisions align with the project constitution principles.