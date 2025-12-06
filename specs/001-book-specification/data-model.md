# Data Model: Physical AI & Humanoid Robotics — Essentials

## Overview
This document defines the data structures and content models for the Physical AI & Humanoid Robotics textbook project. The models support both human-readable documentation and RAG (Retrieval Augmented Generation) system requirements.

## Content Entities

### 1. Book
The top-level entity representing the complete textbook.

**Fields**:
- `id`: Unique identifier for the book (string)
- `title`: "Physical AI & Humanoid Robotics — Essentials" (string)
- `description`: Brief description of the book's purpose (string)
- `version`: Current version of the content (string)
- `chapters`: Array of Chapter entities (array)
- `metadata`: Additional book-level metadata (object)

**Relationships**:
- Contains many Chapters (1 to many)

### 2. Chapter
A major division of the textbook, containing multiple lessons.

**Fields**:
- `id`: Unique identifier for the chapter (string)
- `title`: Chapter title (string)
- `description`: Brief description of the chapter content (string)
- `position`: Sequential position in the book (integer)
- `lessons`: Array of Lesson entities (array)
- `slug`: URL-friendly identifier (string)

**Relationships**:
- Belongs to one Book (many to 1)
- Contains many Lessons (1 to many)

### 3. Lesson
An individual lesson within a chapter, representing the smallest unit of learning.

**Fields**:
- `id`: Unique identifier for the lesson (string)
- `title`: Lesson title (string)
- `description`: Brief description of the lesson content (string)
- `position`: Sequential position within the chapter (integer)
- `content`: Main content of the lesson (string)
- `chapterId`: Reference to parent chapter (string)
- `slug`: URL-friendly identifier (string)
- `tags`: Array of relevant tags (array of strings)
- `metadata`: Additional lesson-specific metadata (object)

**Relationships**:
- Belongs to one Chapter (many to 1)

### 4. Content Block
Structured elements within lessons for RAG optimization.

**Fields**:
- `id`: Unique identifier for the content block (string)
- `type`: Type of content block (string - "introduction", "core-concept", "example", "takeaway")
- `content`: The actual content of the block (string)
- `lessonId`: Reference to parent lesson (string)
- `position`: Sequential position within the lesson (integer)

**Relationships**:
- Belongs to one Lesson (many to 1)

### 5. Metadata
Additional information for RAG and search functionality.

**Fields**:
- `id`: Unique identifier for the metadata record (string)
- `entityId`: Reference to the associated entity (string)
- `entityType`: Type of entity ("book", "chapter", "lesson") (string)
- `tags`: Array of relevant tags (array of strings)
- `keywords`: Array of search keywords (array of strings)
- `difficulty`: Learning difficulty level (string - "beginner", "intermediate", "advanced")
- `estimatedReadingTime`: Estimated time to read in minutes (integer)

**Relationships**:
- Associated with one Book, Chapter, or Lesson (many to 1)

## Validation Rules

### Book Validation
- Title must be non-empty and less than 200 characters
- Must contain exactly 6 chapters
- Description must be present and less than 500 characters

### Chapter Validation
- Title must be non-empty and less than 150 characters
- Must contain exactly 3 lessons
- Position must be unique within the book (1-6)
- Description must be present and less than 300 characters

### Lesson Validation
- Title must be non-empty and less than 100 characters
- Position must be unique within the chapter (1-3)
- Content must be present and between 200-2000 words
- Description must be present and less than 200 characters
- Must follow the required format: introduction, core concept, example, takeaway

### Content Block Validation
- Type must be one of: "introduction", "core-concept", "example", "takeaway"
- Content must be non-empty
- Position must be sequential within the lesson (1-n)
- Each lesson must have exactly one of each required type

## State Transitions

### Content Lifecycle
1. **Draft**: Content is being created and edited
2. **Review**: Content is under review by team members
3. **Approved**: Content has been approved and is ready for publication
4. **Published**: Content is live and accessible to readers

### Transition Rules
- Draft → Review: When initial writing is complete
- Review → Draft: When changes are requested
- Review → Approved: When all reviewers approve
- Approved → Review: When updates are needed after approval
- Approved → Published: When content is ready for public access

## RAG-Specific Considerations

### Chunking Strategy
- Lessons are the primary chunking unit for RAG
- Content blocks within lessons provide sub-chunking if needed
- Each chunk should be between 200-500 words for optimal retrieval
- Chunks should maintain semantic coherence

### Metadata for RAG
- Tags and keywords optimize retrieval relevance
- Difficulty level helps filter content appropriately
- Estimated reading time supports user experience
- Content type (introduction/core concept/example/takeaway) supports context-aware responses

## API Contract Considerations

### Content Retrieval Endpoints
- GET /api/book: Retrieve complete book information
- GET /api/chapters: Retrieve list of chapters
- GET /api/chapters/{id}: Retrieve specific chapter with lessons
- GET /api/lessons/{id}: Retrieve specific lesson with content
- GET /api/search: Search across all content with relevance ranking

### RAG Integration Endpoints
- POST /api/query: Submit query for RAG response
- GET /api/chunks/{lessonId}: Retrieve content chunks for specific lesson
- POST /api/feedback: Submit feedback on RAG responses for improvement

## File Structure Mapping

The data model maps to the filesystem structure as follows:

```
docs/
├── [chapter-slug]/                 # Chapter entity
│   ├── [lesson-slug].md           # Lesson entity + Content Blocks
│   ├── [lesson-slug].md           # Lesson entity + Content Blocks
│   └── [lesson-slug].md           # Lesson entity + Content Blocks
└── intro.md                       # Book metadata
```

Each Markdown file contains frontmatter that represents the entity's metadata and the content represents the lesson's content blocks.