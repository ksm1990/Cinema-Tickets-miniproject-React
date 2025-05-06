import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';

function Movies({ day, movies, onMovieClick }) {
  const moviesOnDay = movies.filter((movie) =>
    movie.screenings.some((screening) => screening.weekday === day)
  );

  return (
    <>
      <div
        className="movies-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 150px)',
          gap: '1px',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {moviesOnDay.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => onMovieClick(movie)}
              style={{
                width: '90%',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              <img
                src={movie.image}
                style={{
                  width: '100%',
                  maxWidth: '140px',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
                alt={movie.title}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;
