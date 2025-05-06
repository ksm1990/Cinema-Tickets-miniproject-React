import { useState, useEffect } from 'react';
import Movies from './Movies';
import Screening from './Screening';

function MovieCard({ movie, day, movies }) {
  if (!movie || !day) {
    return (
      <div className="movie-card-placeholder">
        Please select a movie and day.
      </div>
    );
  }

  const screenings = movie.screenings.filter((s) => s.weekday === day);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="left-section-movie-card">
          <img
            src={movie.image}
            alt={movie.title}
            style={{
              maxWidth: '300px',
              maxHeight: '450px',
              objectFit: 'contain',
              borderRadius: '30px',
            }}
          />
        </div>
        <div className="right-section-movie-card" style={{ textAlign: 'left' }}>
          <h2>{movie.title}</h2>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Duration:</strong> {movie.duration} min
          </p>
          <p>
            <strong>Release Year:</strong> {movie.release_year}
          </p>
          <p>{movie.description}</p>
        </div>
      </div>
      <Screening
        movie={movie}
        day={day}
        movies={movies}
        screenings={screenings}
      />
    </>
  );
}

export default MovieCard;
