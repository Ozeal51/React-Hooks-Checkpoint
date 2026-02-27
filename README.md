# My Movies & TV Shows (React)

## Brief

A small React app to list favorite movies/TV shows, built with Vite.

## Features

- View movies as cards (title, poster, description, rating).
- Add a new movie via a simple form (title, poster URL, rating, description).
- Filter the displayed list by title substring and minimum rating.

## Files of interest

- `src/App.jsx` — main app: state, add-form, filtering logic.
- `src/components/MovieList.jsx` — renders the grid of movies.
- `src/components/MovieCard.jsx` — individual movie card.
- `src/components/Filter.jsx` — controls for title and rating filters.

## Run

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open the local URL (usually `http://localhost:5173`).

## Notes

- The app uses React hooks (`useState`) for state management.
- Changes are not persisted (no localStorage) — I can add that if you want.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
