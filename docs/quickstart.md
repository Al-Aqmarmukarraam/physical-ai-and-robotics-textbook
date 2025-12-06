# Quickstart Guide for Content Contributors

This guide helps content contributors understand how to add and modify content in the Physical AI & Humanoid Robotics textbook.

## Lesson Structure

Each lesson follows a consistent format:

```markdown
---
title: Lesson Title
description: Brief description of the lesson content
tags: [tag1, tag2, tag3]
---

# Lesson Title

## Introduction

Brief introduction to the topic and its relevance.

## Core Concept

Detailed explanation of the main concept.

## Example

Practical example or demonstration.

## Key Takeaway

Key points to remember (usually as bullet points).
```

## Adding New Content

1. **Create a new lesson file** in the appropriate chapter directory
2. **Follow the naming convention**: `lesson-X.Y-short-descriptive-slug.md`
3. **Use proper frontmatter** with title, description, and relevant tags
4. **Follow the 4-part structure** (Introduction, Core Concept, Example, Key Takeaway)
5. **Use appropriate headings** (H1 for title, H2 for sections)
6. **Add internal links** to related content when appropriate

## Style Guidelines

- Write in plain language with minimal jargon
- Focus on conceptual understanding over heavy mathematics
- Keep lessons concise and digestible
- Use examples that illustrate the concept clearly
- Ensure content is RAG-friendly with clear headings and distinct sections

## Technical Requirements

- All content must be in Markdown format
- Use proper syntax highlighting for code blocks
- Optimize images for web (include alt text)
- Use relative links for internal navigation
- Follow Docusaurus Markdown standards