import React, { useState } from 'react';
import Tickets from './Tickets';
// import { TicketContext, useTicketContext } from './Tickets';

function SeatRes({ selectedScreening, day, movie, screenings }) {
  const screening = screenings.find(
    (screening) => screening.start_time === selectedScreening
  );

  const [numberOfTickets, setNumberOfTickets] = useState(0);

  const handleTicketsChange = (tickets) => {
    setNumberOfTickets(tickets);
    console.log('number of reserved tickets:', tickets);
  };

  if (!screening) {
    return <div>Please select a screening time</div>;
  }

  const rows = screening.room.rows;
  const seatsPerRow = screening.room.seatsPerRow;
  const bookings = screening.bookings || [];

  console.log(screening.start_time);
  console.log(rows);
  console.log(seatsPerRow);

  const seatingArray = [];
  for (let i = 0; i < rows; i++) {
    seatingArray[i] = [];
    for (let j = 0; j < seatsPerRow; j++) {
      const isBooked = bookings.some(
        (booking) => booking.row === i + 1 && booking.seat === j + 1
      );
      seatingArray[i][j] = isBooked ? 1 : 0;
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="left-section">
          <Tickets ticketsInfo={handleTicketsChange} />
        </div>
        <div
          className="right-section"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {numberOfTickets > 0 ? (
            <div
              style={{
                marginBottom: '10px',
                fontWeight: 'bold',
                color: '#4CAF50',
              }}
            >
              Please select {numberOfTickets} seats:
            </div>
          ) : (
            <div style={{ marginBottom: '15px', color: '#f44336' }}>
              Please add at least one ticket
            </div>
          )}
          <table className="seating-table">
            <tbody>
              {Array.from({ length: rows }, (_, i) => (
                <tr key={i}>
                  <td className="row-label">{i + 1} - </td>
                  {Array.from({ length: seatsPerRow }, (_, j) => (
                    <td key={j}>
                      {seatingArray[i][j] === 0 ? (
                        <button>{j + 1}</button>
                      ) : (
                        <button
                          disabled
                          style={{
                            color: 'red',
                          }}
                        >
                          {j + 1}
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SeatRes;
