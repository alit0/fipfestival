# AGENTS.md

Welcome, AI Agent! This file provides the structural and operational context necessary for interacting with the **FIP Festival** codebase. Please adhere to these guidelines to ensure consistency, high quality, and architectural compliance.

## 1. Project Overview & Tech Stack
- **Project**: FIP Festival Web App
- **Core Technologies**: React, TypeScript, Native CSS.
- **i18n**: `react-i18next` — 5 languages: `es`, `en`, `it`, `fr`, `pt`.
- **Goal**: Maintain pixel-perfect design translations (from Zeplin/Figma) while ensuring peak performance and maintainability.

---

## 2. Agent Routing Routine (CRITICAL — First Step Always)

**EVERY TIME you receive a new request**, your **FIRST IMMUTABLE STEP** is to follow this initialization sequence:

1. **Read `AGENTS.md`** (this file) — absorb architectural context.
2. **Read `ORCHESTRATOR_README.md`** — absorb all system directives, the initialization routine, and the full skills catalog.
3. **Load Skills** — navigate to `.agents/Skills/` and read the relevant `SKILL.md` files **concurrently**. Combining multiple skills is the norm, not the exception.
4. **Apply everything** — use `AGENTS.md` + `ORCHESTRATOR_README.md` + loaded Skills throughout the entire task execution.

> ⚠️ **Do not skip any step.** The cumulative context from these files determines the quality and consistency of the output.

### Task Flow (each step = new independent conversation)

```
User → AGENTS.md → Orchestrator → Team Captain → Agent/Skill → Summary → back up
```

1. **User** describes the task.
2. **AGENTS.md** (this file) provides the entry point and project context.
3. **Orchestrator** (`orchestrator.md`) analyzes, classifies, and dispatches to the correct team.
4. **Team Captain** receives the task, breaks it down, and assigns to the right agent/skill.
5. **Agent/Skill** executes the specific sub-task with a clean, focused context.
6. **Team QA** reviews, verifies, and formally closes the task (new conversation).
7. **Summary** of closed task travels back: QA → Captain → Orchestrator → User.

> ⚡ **Each transition is a NEW conversation/prompt.** Never carry the full history forward.
> This prevents long contexts, hallucinations, and loss of focus.

---

## 3. Mandatory Rules for All Components

Every component, view, or feature developed must guarantee the following:

### A. Dual Theme (Light / Dark)
Implement and test the functionality for both **Light** and **Dark** themes.
- Use the attributes `data-theme='dark'` and `data-theme='light'` consistently across all CSS and TSX files.

### B. Responsive Design
The design must be perfect and easily adaptable on all mobile devices.
- It is mandatory to ensure layout responsiveness up to at least `1024px`.

### C. Internationalization (i18n)
All text displayed on the screen **must** be processed through the `useTranslation` hook.
- Support is required for the 5 main languages: `es`, `en`, `it`, `fr`, and `pt`.
- **CRITICAL**: Absolutely NO hardcoded strings in Spanish (or any language) inside HTML/TSX files.

### D. Visual Quality and Delivery
- Always act as an expert UI/UX developer.
- Ensure millimeter precision in all interfaces according to the reference designs (Zeplin, Figma, screenshots).
- **BEFORE NOTIFYING THE USER**: thoroughly review the design. It must look pixel-for-pixel identical to the reference.
- Check alignments, typography hierarchies, and repeated design tokens thoroughly before delivering the code.

---

## 4. Skills Catalog (`.agents/Skills/`) — 32 Skills

Consult the relevant skills for each request. Read `SKILL.md` files **concurrently** when multiple are needed.

| # | Skill Folder | Description |
|---|---|---|
| 1 | **Committer** | Clean, descriptive commits under Conventional Commits standard. |
| 2 | **agent-browser** | Correctly using the agent's automated browser. |
| 3 | **agent-development** | Patterns and practices for building and improving AI agents. |
| 4 | **agent-memory-systems** | Persistent memory strategies between agent sessions. |
| 5 | **agent-tools** | Effective use of agent tool ecosystem. |
| 6 | **audit-website** | Comprehensive website audits (UI/UX, structural, performance). |
| 7 | **canvas-design** | Design and visual composition using canvas techniques. |
| 8 | **chrome-devtools** | Best practices for using browser developer tools for inspection. |
| 9 | **clean-code** | Universal principles for clean, readable, and maintainable code. |
| 10 | **css-styling-expert** | Patterns, class organization, and expert conventions for native CSS. |
| 11 | **design-md** | Markdown-based design documentation and spec writing. |
| 12 | **find-skills** | Methodology for searching and identifying the right skills to use. |
| 13 | **free-tool-strategy** | Strategies for leveraging free tools effectively. |
| 14 | **frontend-design** | Frontend design principles and implementation patterns. |
| 15 | **implement-design** | Step-by-step guides to translate designs (Zeplin, Figma, images) into pixel-perfect code. |
| 16 | **marketing-psychology** | Psychological principles applied to marketing and UX copy. |
| 17 | **mcp-builder** | Building and configuring MCP (Model Context Protocol) servers. |
| 18 | **nodejs-backend-patterns** | Backend patterns and best practices with Node.js. |
| 19 | **performance** | Techniques, lazy loading, and checklists to optimize speed and performance. |
| 20 | **qa-test-planner** | Test planning, coverage strategies, and QA methodologies. |
| 21 | **react-components** | Strict rules for creating, typing (TypeScript), and structuring React components and hooks. |
| 22 | **remembering-conversations** | Techniques for persisting and retrieving context across sessions. |
| 23 | **senior-qa** | Advanced QA practices, edge case identification, and quality assurance. |
| 24 | **seo-audit** | Technical SEO best practices and content accessibility guidelines. |
| 25 | **social-content** | Social media content creation (copy, posts, campaigns). |
| 26 | **subagent-driven-development** | Orchestration patterns for multi-agent workflows. |
| 27 | **supabase-postgres-best-practices** | Database patterns and best practices for Supabase and PostgreSQL. |
| 28 | **ui-ux-pro-max** | Advanced UI/UX design principles and implementation standards. |
| 29 | **vercel-react-best-practices** | Structure, routing, and optimized deployment on Vercel + React. |
| 30 | **verification-before-completion** | Checklists and routines to validate work before marking as done. |
| 31 | **web-artifacts-builder** | Building and managing web-based artifacts and deliverables. |
| 32 | **writing-plans** | Creating detailed, actionable implementation plans. |

---

## 5. Agent Teams (`.agents/agents/`)

The orchestrator dispatches specialized sub-agents organized into teams:

| Team | Agents |
|------|--------|
| **team-planificacion** | `task-decomposer`, `plan-writer`, `task-verifier`, `captain-planificacion` |
| **team-desarrollo** | `implementer`, `spec-reviewer`, `frontend-developer`, `backend-developer`, `performance-optimizer`, `captain-desarrollo` |
| **team-diseno** | `figma-implementer`, `frontend-layouter`, `ui-designer`, `captain-diseno` |
| **team-qa** | `qa-tester`, `browser-tester`, `site-auditor`, `captain-qa` |
| **team-contenido** | `content-writer`, `seo-auditor`, `free-tool-strategist`, `captain-contenido` *(via team-marketing)* |
| **team-marketing** | `content-writer`, `seo-strategist`, `social-manager`, `free-tool-strategist`, `captain-marketing` |
| **team-infraestructura** | `committer`, `memory-manager`, `mcp-builder`, `ai-tools-agent`, `web-artifact-builder`, `captain-infraestructura` |

Entry point: `orchestrator.md`

---

## 6. Mandatory Workflow

1. ✅ Read `AGENTS.md`.
2. ✅ Read `ORCHESTRATOR_README.md`.
3. ✅ Load relevant `.agents/Skills/[skill]/SKILL.md` files (concurrently).
4. ✅ **Orchestrator** receives task → dispatches to correct **Team Captain**.
5. ✅ **Captain** distributes sub-tasks to the right **Agent/Skill** (new conversation each).
6. ✅ **Agent/Skill** executes: `.tsx` components + `.css` styling, applying all prior rules.
7. ✅ Verify: Clean Code, dual theme, responsive (1024px+), multi-language (5 langs).
8. ✅ Visual review — pixel-perfect against reference design.
9. ✅ **Team QA** reviews and formally closes the task (new conversation).
10. ✅ **QA → Captain → Orchestrator**: send closed task summary.
11. ✅ Notify user only after Orchestrator consolidates all results.
