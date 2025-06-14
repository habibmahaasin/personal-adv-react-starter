# Personal Advanced React Starter - By: Mahaasin

This project is a starter template for building modern React applications with TypeScript, Vite, Redux Toolkit, React Router (TanStack), Tailwind CSS, and Vitest for testing.

## Features

- **React 19**
- **TypeScript**
- **Vite** for fast development and builds
- **Redux Toolkit** for state management
  - Includes RTK Query for data fetching and caching
- **TanStack Router** for client-side routing
- **Tailwind CSS 4** for utility-first styling
- **ESLint** for code linting
- **Vitest** for unit and integration testing
  - Includes Testing Library for React components
  - Coverage reports via `@vitest/coverage-v8`

## Project Structure

```
public/
src/
  __tests__/         # Test files (Vitest)
  assets/           # Static assets like images, fonts
  components/       # Reusable UI components
    layouts/        # Layout components (e.g., PrivateRoute, PublicRoute)
    modules/        # Larger, feature-specific components or modules
  hooks/            # Custom React hooks
  pages/            # Page-level components (routed components)
    dashboard/
    login/
  routes/           # TanStack Router configuration
  services/         # RTK Query API services
    posts/
  store/            # Redux Toolkit store and slices
    features/
  utils/            # Utility functions
  App.tsx           # Main application component
  global.css        # Global styles (can include Tailwind base/components/utilities)
  main.tsx          # Entry point of the application
  setupTests.ts     # Test setup for Vitest (e.g., jsdom)
  vite-env.d.ts     # Vite environment type definitions
tailwind.config.ts  # Tailwind CSS configuration
.eslintrc.cjs       # ESLint configuration (or eslint.config.js)
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Prerequisites

- [Node.js](https://nodejs.org/) (version specified in `.nvmrc` if present, or latest LTS recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Getting Started

### 1. Clone the repository (if applicable)

```bash
git clone <repository-url>
cd personal-adv-react-starter
```

### 2. Install Dependencies

Using npm:

```bash
npm install --legacy-peer-deps
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

### 3. Environment Variables

If your project requires environment variables (e.g., for API keys or base URLs), create a `.env` file in the project root. You can copy the `.env.example` if one exists.

Example `.env` file:

```
VITE_API_BASE_URL=https://api.example.com
```

See [Vite's documentation on Environment Variables](https://vitejs.dev/guide/env-and-mode.html) for more details.

## Available Scripts

In the project directory, you can run:

- `npm run dev`
  Runs the app in development mode using Vite. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.
  The page will reload if you make edits.

- `npm run build`
  Builds the app for production to the `dist` folder.
  It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run lint`
  Lints the project files using ESLint.

- `npm run preview`
  Serves the production build locally from the `dist` folder. This is useful for verifying the build before deployment.

- `npm run test`
  Runs the test suite using Vitest.
  This will also generate a coverage report in the `coverage/` directory.

## Tech Stack Overview

- **Frontend Library:** [React](https://react.dev/)
- **Build Tool/Dev Server:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
  - **Data Fetching:** RTK Query
- **Routing:** [TanStack Router](https://tanstack.com/router/v1)
- **Testing:** [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting:** [ESLint](https://eslint.org/)

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TanStack Router Documentation](https://tanstack.com/router/v1/docs/introduction)
- [Vitest Documentation](https://vitest.dev/guide/)

<!-- ## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. (You can change this if needed) -->
