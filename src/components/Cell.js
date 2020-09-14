import React from 'react';

const Cell = ({ onClick, value }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: 100,
        height: 100,
      }}
    >
      <button
        style={{
          fontSize: '2.5rem',
          width: '100%',
          height: '100%',
        }}
        onClick={onClick}
        type="button"
      >
        {value}
      </button>
    </div>
  )
}

export default Cell;