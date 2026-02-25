# 🎯 Sistema Multi-Agente — Guía de Uso

Este proyecto usa un sistema de **Orquestador + Subagentes** para manejar tareas complejas. Esta arquitectura implementa los conceptos de: contexto limpio por subagente, Spec-Driven Development, y Lazy Loading de Skills.

---

## 🚦 Rutina de Inicialización (CRÍTICO — Ruteo de Agentes)

**CADA VEZ QUE RECIBAS UNA NUEVA PETICIÓN DEL USUARIO**, tu **PRIMER PASO INELUDIBLE** es ejecutar esta secuencia estricta:

1. **Paso 1**: Lee siempre el archivo `AGENTS.md` en la raíz del proyecto para absorber el contexto general.
2. **Paso 2**: Lee el archivo `ORCHESTRATOR_README.md` (este archivo) para conocer las directrices completas y acceder al catálogo de Skills.
3. **Paso 3**: Analiza la petición y dirígete al directorio `.agents/Skills/` para leer de forma **concurrente** el/los archivos `SKILL.md` requeridos (es altamente probable que necesites combinar más de una skill).
4. **Paso 4**: Aplica conjuntamente las directrices de `AGENTS.md`, `ORCHESTRATOR_README.md` y las Skills consultadas durante **toda** la ejecución de la tarea.

> ⚠️ **No saltees ningún paso.** El contexto acumulado de estos archivos determina la calidad y coherencia de la salida.

---

## 🚀 Cómo Usar el Sistema

### 1. Describí tu tarea al Orquestador

Simplemente describí lo que querés lograr — el orquestador hace el resto:

```
"Quiero agregar un sistema de autenticación con login y registro"
"Refactorizar el módulo de pagos y agregar tests"
"Necesito 3 posts de Instagram para el lanzamiento de la nueva feature"
"Auditar el SEO del sitio completo"
```

El **Orchestrator** va a:
1. Entender la tarea
2. Descomponerla en mini-tareas
3. Crear un plan detallado
4. Despachar subagentes especializados
5. Revisar cada resultado
6. Entregarte el resultado final

---

## 🏗️ Estructura del Sistema

```
.agents/
├── Skills/                          ← 32 skills instaladas (ver catálogo abajo)
├── agents/
│   ├── orchestrator.md              ← 🎯 PUNTO DE ENTRADA
│   │
│   ├── team-planificacion/
│   │   ├── captain-planificacion.md
│   │   ├── task-decomposer.md       ← Divide tareas en mini-tareas atómicas
│   │   ├── plan-writer.md           ← Crea planes paso a paso con código real
│   │   └── task-verifier.md         ← Verifica que las tareas estén bien definidas
│   │
│   ├── team-desarrollo/
│   │   ├── captain-desarrollo.md
│   │   ├── implementer.md           ← Escribe el código (TDD siempre)
│   │   ├── spec-reviewer.md         ← Verifica que el código cumple lo pedido
│   │   ├── frontend-developer.md    ← Especialista en UI/UX y componentes
│   │   ├── backend-developer.md     ← Especialista en APIs y base de datos
│   │   └── performance-optimizer.md ← Optimización de rendimiento
│   │
│   ├── team-diseno/
│   │   ├── captain-diseno.md
│   │   ├── figma-implementer.md     ← Traduce Figma/Zeplin a código pixel-perfect
│   │   ├── frontend-layouter.md     ← Estructura y layout de páginas
│   │   └── ui-designer.md           ← Diseño de interfaces y sistemas de diseño
│   │
│   ├── team-qa/
│   │   ├── captain-qa.md
│   │   ├── qa-tester.md             ← Ejecuta tests y verifica cobertura
│   │   ├── browser-tester.md        ← Verifica la UI en el navegador con screenshots
│   │   └── site-auditor.md          ← Auditoría completa del sitio
│   │
│   ├── team-contenido/
│   │   ├── content-writer.md        ← Copy, posts, microcopy, emails
│   │   ├── seo-auditor.md           ← Auditoría y mejoras SEO
│   │   └── free-tool-strategist.md  ← Estrategia con herramientas gratuitas
│   │
│   ├── team-marketing/
│   │   ├── captain-marketing.md
│   │   ├── content-writer.md        ← Contenido para campañas
│   │   ├── seo-strategist.md        ← Estrategia SEO integral
│   │   ├── social-manager.md        ← Gestión de redes sociales
│   │   └── free-tool-strategist.md  ← Herramientas gratuitas de marketing
│   │
│   └── team-infraestructura/
│       ├── captain-infraestructura.md
│       ├── committer.md             ← Commits en formato Conventional Commits
│       ├── memory-manager.md        ← Persiste decisiones clave entre sesiones
│       ├── mcp-builder.md           ← Construye y configura servidores MCP
│       ├── ai-tools-agent.md        ← Gestión del ecosistema de herramientas AI
│       └── web-artifact-builder.md  ← Construcción de artefactos web
└── memory/                          ← Decisiones persistentes entre sesiones
```

---

## 🔄 Flujo del Sistema

> ⚡ **Regla fundamental**: cada salto = nueva conversación/prompt independiente.
> Esto evita contextos largos y alucinaciones. Cada agente recibe solo lo que necesita.

```
[Vos] → Describe la tarea
           ↓
    📄 AGENTS.md          ← punto de entrada, contexto del proyecto
           ↓
    🎯 ORCHESTRATOR       ← analiza, clasifica y despacha
           ↓
    � Capitán del Equipo ← recibe y distribuye internamente
    (captain-planificacion / captain-desarrollo / captain-diseno /
     captain-marketing / captain-infraestructura)
           ↓
    🛠️  Agente / Skill     ← ejecuta la tarea puntual
    (task-decomposer / implementer / figma-implementer /
     committer / content-writer / ...)
           ↓
    🧪 TEAM QA            ← revisa, verifica y CIERRA la tarea
    (qa-tester / browser-tester / site-auditor)
           ↓
    📋 Resumen de tarea CERRADA → Capitán → Orchestrator
           ↓
[Vos] ← Reporte final consolidado
```

---

## 👥 Cuándo Usar Cada Agente Directamente

Podés invocar los subagentes directamente para tareas más simples:

| Si querés... | Usá... |
|--------------|--------|
| Dividir una tarea en partes | `task-decomposer` |
| Crear un plan de implementación | `plan-writer` |
| Verificar que las tareas estén bien definidas | `task-verifier` |
| Implementar algo específico | `implementer` |
| Revisar si el código cumple la spec | `spec-reviewer` |
| Desarrollar frontend | `frontend-developer` |
| Desarrollar backend/API | `backend-developer` |
| Optimizar rendimiento | `performance-optimizer` |
| Traducir un diseño Figma/Zeplin | `figma-implementer` |
| Diseñar una interfaz | `ui-designer` |
| Correr tests | `qa-tester` |
| Ver cómo se ve la UI en el navegador | `browser-tester` |
| Auditar el sitio completo | `site-auditor` |
| Crear contenido para redes/blog | `content-writer` (team-marketing) |
| Auditar el SEO del sitio | `seo-strategist` |
| Gestionar redes sociales | `social-manager` |
| Hacer un commit limpio | `committer` |
| Guardar una decisión importante | `memory-manager` |
| Construir un servidor MCP | `mcp-builder` |

---

## 📦 Catálogo de Skills (`.agents/Skills/`) — 32 Skills

El agente **DEBE** consultar las skills relevantes según el contexto de cada pedido. Leer los `SKILL.md` de forma **concurrente** cuando se necesiten múltiples.

| # | Skill | Descripción |
|---|-------|-------------|
| 1 | **Committer** | Commits limpios y descriptivos bajo el estándar Conventional Commits. |
| 2 | **agent-browser** | Uso correcto del navegador automatizado del agente. |
| 3 | **agent-development** | Patrones y prácticas para construir y mejorar agentes de IA. |
| 4 | **agent-memory-systems** | Estrategias de memoria persistente entre sesiones de agentes. |
| 5 | **agent-tools** | Uso efectivo del ecosistema de herramientas del agente. |
| 6 | **audit-website** | Auditorías integrales del sitio (UI/UX, estructural, performance). |
| 7 | **canvas-design** | Diseño y composición visual usando técnicas de canvas. |
| 8 | **chrome-devtools** | Mejores prácticas para usar las herramientas de desarrollo del navegador. |
| 9 | **clean-code** | Principios universales para código limpio, legible y mantenible. |
| 10 | **css-styling-expert** | Patrones, organización de clases y convenciones expertas para CSS nativo. |
| 11 | **design-md** | Documentación de diseño y escritura de specs en Markdown. |
| 12 | **find-skills** | Metodología para buscar e identificar las skills correctas a usar. |
| 13 | **free-tool-strategy** | Estrategias para aprovechar herramientas gratuitas eficazmente. |
| 14 | **frontend-design** | Principios de diseño frontend y patrones de implementación. |
| 15 | **implement-design** | Guías paso a paso para traducir diseños (Zeplin, Figma, imágenes) a código píxel-perfect. |
| 16 | **marketing-psychology** | Principios psicológicos aplicados al marketing y copy UX. |
| 17 | **mcp-builder** | Construcción y configuración de servidores MCP (Model Context Protocol). |
| 18 | **nodejs-backend-patterns** | Patrones de backend y mejores prácticas con Node.js. |
| 19 | **performance** | Técnicas, lazy loading y checklists para optimizar velocidad y rendimiento. |
| 20 | **qa-test-planner** | Planificación de tests, estrategias de cobertura y metodologías QA. |
| 21 | **react-components** | Reglas estrictas para crear, tipar (TypeScript) y estructurar componentes y hooks en React. |
| 22 | **remembering-conversations** | Técnicas para persistir y recuperar contexto entre sesiones. |
| 23 | **senior-qa** | Prácticas avanzadas de QA, identificación de casos edge y aseguramiento de calidad. |
| 24 | **seo-audit** | Mejores prácticas de SEO técnico y directrices de accesibilidad de contenido. |
| 25 | **social-content** | Creación de contenido para redes sociales (copy, posts, campañas). |
| 26 | **subagent-driven-development** | Patrones de orquestación para flujos de trabajo multi-agente. |
| 27 | **supabase-postgres-best-practices** | Patrones de base de datos y mejores prácticas para Supabase y PostgreSQL. |
| 28 | **ui-ux-pro-max** | Principios avanzados de diseño UI/UX y estándares de implementación. |
| 29 | **vercel-react-best-practices** | Estructura, enrutamiento y despliegue optimizado en Vercel + React. |
| 30 | **verification-before-completion** | Checklists y rutinas para validar el trabajo antes de marcarlo como terminado. |
| 31 | **web-artifacts-builder** | Construcción y gestión de artefactos web y entregables. |
| 32 | **writing-plans** | Creación de planes de implementación detallados y accionables. |

---

## ✅ Requerimientos Base para Todo Componente

Para **cualquier código de Interfaz, Vista o Componente** nuevo o modificado, el agente **DEBE GARANTIZAR**:

### A. Tema Dual (Claro / Oscuro)
- Implementar y testear obligatoriamente la funcionalidad Claro/Oscuro.
- Usar los atributos `data-theme='dark'` y `data-theme='light'` de forma consistente en todos los archivos CSS y TSX.

### B. Responsive Design
- El diseño DEBE verse perfecto y ser adaptable en dispositivos móviles.
- Es obligatorio garantizar responsividad como mínimo hasta `1024px`.

### C. Internacionalización (i18n)
- Todo texto en pantalla debe usar el hook `useTranslation`.
- Soporte explícito en los **5 idiomas principales**: `es`, `en`, `it`, `fr`, `pt`.
- **CRÍTICO**: Absolutamente NINGÚN string quemado (hardcoded) en español en el HTML/TSX.

---

## 🎨 Calidad Visual y Entrega

- **ANTES DE ENTREGAR O NOTIFICAR AL USUARIO**: Revisar detalladamente el diseño. Tiene que verse milimétricamente idéntico a las imágenes, Figma o capturas de referencia aportadas por el Usuario.
- **Actitud Profesional**: Ser perfeccionista, detallista y extremadamente profesional al redactar el código y el CSS.
- Inspeccionar alineaciones, jerarquías de fuentes y tokens de diseño repetidos antes de cualquier entrega.

---

## 💡 Principios del Sistema

### ⚡ Nueva Conversación por Cada Salto
Cada transición del flujo (usuario → orquestador → capitán → agente) ocurre en una **conversación nueva e independiente**. Esto evita contextos extensos, reduce alucinaciones y mantiene el foco del agente en su tarea específica.

### Contexto Limpio por Subagente
Cada subagente recibe **solo la información que necesita**: `AGENTS.md` + `ORCHESTRATOR_README.md` + skills relevantes + mini-tarea puntual. No recibe historial de conversaciones anteriores ni resultados de otros agentes.

### Capitán como Coordinador
El capitán de cada equipo es el responsable de recibir la tarea del orquestador, distribuirla entre los agentes de su equipo, y consolidar el resumen de vuelta. El orquestador no habla directamente con los agentes — siempre pasa por el capitán.

### Lazy Loading de Skills
El orquestador solo inyecta al subagente las skills relevantes para SU tarea. Si el implementer trabaja en React, recibe las skills de React — no las de SEO ni las de Supabase.

### Spec-Driven Development
Siempre hay una especificación antes del código. El spec-reviewer verifica que el código cumple exactamente lo pedido antes de avanzar.

### Un Subagente a la Vez
Los implementers NO se despachan en paralelo para evitar conflictos de archivos. El trabajo fluye en serie, con revisión entre cada paso.

---

## 🧠 Memoria Persistente

Las decisiones clave se guardan en `.agents/memory/` para que futuras sesiones arranquen con contexto:

```
.agents/memory/
├── 2026-02-24-auth-architecture.md   ← Por qué elegimos Supabase Auth
├── 2026-02-24-cors-bug-solution.md   ← Cómo resolvimos el bug de CORS
└── ...
```
