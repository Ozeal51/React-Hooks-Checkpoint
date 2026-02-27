import React from 'react'

// Presentational component: receives a `movie` object and renders its fields.
export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className="poster" src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="rating">Rating: {movie.rating}</p>
        <p className="desc">{movie.description}</p>
      </div>
    </div>
  )
}
