import React from 'react';
import Cell from './Cell.js';

const Grid = ({ grid, handleClick }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          backgroundColor: '#000',
          display: 'grid',
          gridTemplateRows: `repeat(${grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
          gridGap: 2,
          marginTop: '1rem'
        }}
      >
        {grid.map((row, rowIdx) =>
          row.map((value, colIdx) => (
            <Cell
              key={`${colIdx}-${rowIdx}`}
              onClick={() => {
                handleClick(colIdx, rowIdx)
              }}
              value={value}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Grid;