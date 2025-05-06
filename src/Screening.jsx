import React, { useState } from 'react';
import Movies from './Movies';
import MovieCard from './MovieCard';
import SeatRes from './SeatRes';

function Screening({ movie, day, movies, screenings }) {
  const [selectedScreening, setSelectedScreening] = useState(null);
  // const screenings = movie.screenings.filter((s) => s.weekday === day);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h4>Screenings on {day}</h4>
        <table style={{ margin: '0 auto', textAlign: 'center' }}>
          <tbody style={{ margin: '0 auto' }}>
            {Array.from(
              { length: Math.ceil(screenings.length / 3) },
              (_, rowIndex) => (
                <tr key={rowIndex}>
                  {screenings
                    .sort((a, b) => a.start_time.localeCompare(b.start_time))
                    .slice(rowIndex * 3, rowIndex * 3 + 3)
                    .map((screening) => (
                      <td
                        key={screening.id}
                        style={{ padding: '3px', textAlign: 'center' }}
                      >
                        <button
                          onClick={() => {
                            setSelectedScreening(screening);
                          }}
                        >
                          {screening.start_time}
                        </button>
                      </td>
                    ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {selectedScreening ? (
        <SeatRes
          selectedScreening={selectedScreening.start_time}
          day={day}
          movie={movie}
          screenings={screenings}
        />
      ) : (
        <div>Please select a screening time to view seating</div>
      )}
    </>
  );
}

export default Screening;
