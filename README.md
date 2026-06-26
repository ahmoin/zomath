<p align="center">
  <img src="./public/og.png" alt="Zomath" width="600" />
</p>

# Zomath

Learn math with AI tutoring, problem solving, and practice. Organize your work in Projects and Journals.

**Try it:** [zomath.vercel.app](https://zomath.vercel.app)

## Features

**Projects and Journals**
Store lecture notes, PDFs, links, questions in Projects. Journals are Lexical text editors with components for LaTeX rendering, code blocks, and text formatting.

**Newton AI Tutor**
Ask Newton to explain concepts, work through problems, or explore different approaches. Explains reasoning, not just answers.

**Solve**
Take a picture of a handwritten or printed math problem. Newton walks you through it step by step, with follow up questions and methods to solve it.

---

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS
- **Database:** Turso (LibSQL) with Drizzle ORM
- **Storage:** Vercel Blob for files, Dexie (IndexedDB) for local journal sync
- **LLM:** Vercel AI SDK with OpenRouter
- **Auth:** Better Auth (with GitHub and Google OAuth)
- **Editor:** Lexical based editor forked from [shadcn-editor](https://github.com/htmujahid/shadcn-editor)
- **UI:** shadcn/ui, Radix UI, Hugeicons
- **Voice:** Vercel AI Elements with ElevenLabs
- **Search:** Tavily for web search in AI responses
- **Code Quality:** Biome for linting and formatting

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation)
- OpenRouter API key (get one free at [openrouter.ai](https://openrouter.ai))

### Setup

1. Clone and install:
```bash
   git clone https://github.com/ahmoin/zomath.git
   cd zomath
   pnpm install
```

2. Copy environment template:
```bash
   cp .env.example .env.local
```

Add these keys:
- **Better Auth:** `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `BETTER_AUTH_API_KEY`
- **OAuth:** `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- **AI:** `OPENROUTER_API_KEY`, `TAVILY_API_KEY`, `ELEVENLABS_API_KEY`
- **Storage:** `BLOB_READ_WRITE_TOKEN` (Vercel Blob)
- **Database:** `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`
- **Subscriptions:** `POLAR_ACCESS_TOKEN`, `POLAR_PLUS_MONTHLY_ID`, `POLAR_PLUS_YEARLY_ID`, `POLAR_WEBHOOK_SECRET`

3. Initialize the database:
```bash
   pnpm db:push
```

---

## Running the Project

**Development:**
```bash
pnpm dev
```
Opens on [http://localhost:3000](http://localhost:3000)

**Production build:**
```bash
pnpm build
pnpm start
```

**Database:**
- `pnpm db:push` - apply schema changes
- `pnpm db:generate` - create migrations
- `pnpm db:studio` - open Turso studio
- `pnpm db:reset` - reset database

**Code:**
- `pnpm lint` - check for issues
- `pnpm format` - format code
- `pnpm typecheck` - run TypeScript checks
- `pnpm check` - run all checks

Deployed on [Vercel](https://vercel.com).

---

## Contributing

PRs welcome. Contribute fixes, features, or docs.

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. [Commit with a prefix](https://www.conventionalcommits.org/en/v1.0.0/#summary): `feat:`, `fix:`, `docs:`, `refactor:`, `perf:`, `test:`, `chore:`, `ci:`
4. Push and open a PR

Run `pnpm lint && pnpm format && pnpm check:fix` before submitting.

---

## License

MIT - [LICENSE.md](./LICENSE.md)

---

## Feedback

Report bugs or feedback on [GitHub](https://github.com/ahmoin/zomath/issues).
