# DBLK - URL Shortener

A modern URL shortener built with Next.js, inspired by [dub](https://github.com/dubinc/dub).

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn
- **Database**: Prisma
- **Package Manager**: PNPM
- **Monorepo Management**: Turborepo
- **Code Quality**: ESLint, Prettier, Husky, Lint-staged

## Project Structure

```
dblk/
├── apps/
│   ├── web/          # Main website (dblk.ir)
│   └── dashboard/    # Dashboard (app.dblk.ir)
├── packages/
│   ├── ui/           # Shared UI components
│   ├── config/       # Shared configuration
│   └── db/           # Database schema and utilities
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dblk.git
   cd dblk
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Development

- `pnpm dev` - Start development servers
- `pnpm build` - Build all applications
- `pnpm lint` - Run linting
- `pnpm format` - Format code with Prettier

## License

MIT 