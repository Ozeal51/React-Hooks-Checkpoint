# Hosea's Movie & TV Shows (React Router)

A feature-rich React application built with Hooks and React Router to manage and browse a personal collection of movies and TV shows.

## 🚀 Features

- **Movie Listing**: View a dynamic grid of movie cards with posters, titles, and ratings.
- **Dynamic Routing**: Seamless navigation between the home page and individual movie detail pages using `react-router-dom`.
- **Movie Details**: Dedicated view for each movie featuring:
  - Full description and high-quality posters.
  - **Embedded Video Trailers**: Watch movie trailers directly within the app via YouTube embed.
  - **Back Navigation**: Easy return to the home screen.
- **Advanced Filtering**: Filter your movie collection by title or minimum rating in real-time.
- **Add New Movies**: Interactive form to add custom movies with titles, descriptions, poster URLs, and trailer links.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## 🛠️ Technology Stack

- **React 19**: Utilizing modern functional components and hooks (`useState`, `useLocation`, `useParams`).
- **React Router 7**: Managing navigation and dynamic URL parameters.
- **Vite**: Ultra-fast frontend build tool.
- **CSS3**: Custom styling for a clean, modern user interface.

## 📂 Project Structure

- [App.jsx](file:///c:/Users/USER/Desktop/GOMYCODE/react-hooks-checkpoint/src/App.jsx): Main router configuration and layout.
- [Home.jsx](file:///c:/Users/USER/Desktop/GOMYCODE/react-hooks-checkpoint/src/pages/Home.jsx): Home page containing the movie list, filter controls, and the "Add Movie" form.
- [MovieDetail.jsx](file:///c:/Users/USER/Desktop/GOMYCODE/react-hooks-checkpoint/src/pages/MovieDetail.jsx): Detailed view for a single movie with embedded trailers.
- [MovieList.jsx](file:///c:/Users/USER/Desktop/GOMYCODE/react-hooks-checkpoint/src/components/MovieList.jsx): Component for rendering the grid of movie cards.
- [MovieCard.jsx](file:///c:/Users/USER/Desktop/GOMYCODE/react-hooks-checkpoint/src/components/MovieCard.jsx): Presentational component for individual movie previews.
- [Filter.jsx](file:///c:/Users/USER/Desktop/GOMYCODE/react-hooks-checkpoint/src/components/Filter.jsx): Input components for searching and filtering.

## 🚦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 Usage

- **Browse**: Scroll through the collection on the home page.
- **Search**: Use the filter inputs at the top to find specific movies or filter by rating.
- **View Details**: Click on any movie card to see its full description and watch the trailer.
- **Add Content**: Fill out the form at the bottom of the home page to add your own movies to the list!
