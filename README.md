# Mainstack — Transactions dashboard (React + TypeScript + Vite)

This repository is a small transactions dashboard demo built with React, TypeScript and Vite. It includes a set of UI components, hooks, and tests using Vitest and React Testing Library.

## Quick start

Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

Install dependencies

```bash
npm install
# or
# yarn
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
npm run preview
```

Lint the code

```bash
npm run lint
```

## Tests

This project uses Vitest + @testing-library/react for unit tests. The test environment is configured in `vite.config.ts` and the setup file is `src/test-setup.ts`.

Run the full test suite

```bash
npm test
```

Run a single test file (faster when iterating)

```bash
npx vitest run src/components/__tests__/transaction-chart.test.tsx
```

Run tests in watch mode

```bash
npx vitest
```

Notes about test environment

- JSDOM (used by the test environment) doesn't implement certain browser APIs like `ResizeObserver`. A minimal polyfill is added in `src/test-setup.ts` to avoid errors when mounting chart components (Recharts' `ResponsiveContainer`) in tests.
- If you see errors about missing globals, ensure `vite.config.ts` points to the correct `setupFiles` and that `src/test-setup.ts` imports `@testing-library/jest-dom` (already configured).

## Project structure (important files)

- `src/` — application source
  - `components/` — UI components and tests
  - `hooks/` — custom hooks (e.g. `useTransactionFilters`)
  - `assets/` — icons and static assets
  - `test-setup.ts` — test environment setup and polyfills

## Troubleshooting

- Tests fail with `ResizeObserver is not defined`: make sure `src/test-setup.ts` contains the ResizeObserver mock and that `vite.config.ts` references it under `test.setupFiles`.
- If type errors appear during build, run `npm run build` locally to see tsc output and ensure your TypeScript version matches `package.json`.

## Contributing

Feel free to open PRs to improve components, tests or add more features. Keep changes small and include tests for new behavior.

---

If you'd like, I can add a short developer checklist (pre-commit hooks, format/lint commands) or expand the README with screenshots and a feature list.
