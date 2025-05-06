function Days({ days, onDayClick }) {
  return (
    <div>
      {days.map((day) => (
        <button
          key={day}
          onClick={() => onDayClick(day)}
          style={{ margin: '3px' }}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

export default Days;
