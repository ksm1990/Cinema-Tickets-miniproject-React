import React, { useState, useEffect } from 'react';
import SeatRes from './SeatRes';

function Tickets({ ticketsInfo }) {
  // useState()
  const ticketTypes = [
    { id: 1, name: 'Adult', price: 2500 },
    { id: 2, name: 'Student', price: 2000 },
    { id: 3, name: 'Senior', price: 1800 },
  ];

  const [ticketCounts, setTicketCounts] = useState({
    adult: 0,
    student: 0,
    senior: 0,
  });

  function adultIncrement() {
    setTicketCounts((prev) => ({
      ...prev,
      adult: prev.adult + 1,
    }));
  }

  function adultDecrement() {
    setTicketCounts((prev) => ({
      ...prev,
      adult: Math.max(0, prev.adult - 1),
    }));
  }

  function studentIncrement() {
    setTicketCounts((prev) => ({
      ...prev,
      student: prev.student + 1,
    }));
  }

  function studentDecrement() {
    setTicketCounts((prev) => ({
      ...prev,
      student: Math.max(0, prev.student - 1),
    }));
  }

  function seniorIncrement() {
    setTicketCounts((prev) => ({
      ...prev,
      senior: prev.senior + 1,
    }));
  }

  function seniorDecrement() {
    setTicketCounts((prev) => ({
      ...prev,
      senior: Math.max(0, prev.senior - 1),
    }));
  }

  useEffect(() => {
    const totalTickets =
      ticketCounts.adult + ticketCounts.student + ticketCounts.senior;
    ticketsInfo(totalTickets);
  }, [ticketCounts, ticketsInfo]);

  const totalPrice =
    ticketCounts.adult * 2500 +
    ticketCounts.student * 2000 +
    ticketCounts.senior * 1800;

  return (
    <>
      <div>
        <p>Adult - 2500 HUF</p>
        <button onClick={adultDecrement}>-</button>
        <span style={{ padding: '0 10px' }}>{ticketCounts.adult}</span>
        <button onClick={adultIncrement}>+</button>
      </div>
      <div>
        <p>Student - 2000 HUF</p>
        <button onClick={studentDecrement}>-</button>
        <span style={{ padding: '0 10px' }}>{ticketCounts.student}</span>
        <button onClick={studentIncrement}>+</button>
      </div>
      <div>
        <p>Senior - 1800 HUF</p>
        <button onClick={seniorDecrement}>-</button>
        <span style={{ padding: '0 10px' }}>{ticketCounts.senior}</span>
        <button onClick={seniorIncrement}>+</button>
      </div>
      <div>Summary: {totalPrice} HUF</div>
      <button>Checkout</button>
    </>
  );
}

export default Tickets;
