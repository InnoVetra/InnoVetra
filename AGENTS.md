# AGENTS.md

## Purpose

This file defines the operating rules for OpenAI Codex when working in the InnoVetra website repository.

The repository contains the public-facing InnoVetra website and is currently based on:

- Next.js
- React
- TypeScript
- CSS
- Framer Motion
- Lucide icons

The website may later include additional frontend, backend, API, analytics, CMS, mapping, visualization, or infrastructure components.

Codex must operate in **read-only analysis mode by default**.

Core rule:

> Inspect and understand the repository first. Do not modify anything unless the user explicitly authorizes implementation or modification. When modifying an existing file, preserve its previous state, make the smallest necessary change, and document exactly what changed.

---

## 1. Read This File First

Before working on this repository:

1. Read `AGENTS.md`.
2. Inspect the repository structure.
3. Read `README.md` when relevant.
4. Inspect `package.json`.
5. Identify the framework and dependency versions.
6. Inspect the relevant files before proposing or implementing changes.
7. Determine which files are authoritative.
8. Identify generated, temporary, backup, duplicate, or deprecated files.
9. Understand the component hierarchy and page structure.
10. Do not assume the currently open editor tab is the authoritative implementation.

When relevant, inspect:

```text
app/
components/
public/
styles/
package.json
tsconfig.json
next.config.*
eslint.config.*
.env*
.gitignore
README.md