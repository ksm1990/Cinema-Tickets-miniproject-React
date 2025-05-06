import { useEffect, useState } from 'react';
import './App.css';
import moviesData from './assets/movies.json';
import Days from './Days.jsx';
import Movies from './Movies.jsx';
import MovieCard from './MovieCard.jsx';

function App() {
  const getCurrentDay = () => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const today = new Date();
    return days[today.getDay()];
  };

  const [currentDay] = useState(getCurrentDay());

  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const allDays = Array.from(
    new Set(movies.flatMap((movie) => movie.screenings.map((s) => s.weekday)))
  );

  console.log(selectedDay);

  return (
    <>
      <div className="app-container">
        <h3>
          <Days
            days={allDays}
            onDayClick={(day) => {
              setSelectedDay(day);
              setSelectedMovie(null);
            }}
          />
        </h3>
        <div className="flex-container">
          <div
            className="left-section"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Movies
              day={selectedDay}
              movies={movies}
              onMovieClick={setSelectedMovie}
            />
          </div>
          <div className="right-section">
            <MovieCard
              movie={selectedMovie}
              day={selectedDay}
              movies={movies}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
