import React from "react";

interface GridProps {
  rows: number;
  columns: number;
}

const ViewGrid: React.FC<GridProps> = ({ rows, columns }) => {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(<td key={j}>Cell {i * columns + j + 1}</td>);
    }
    grid.push(<tr key={i}>{row}</tr>);
  }

  return (
    <table className="position-absolute">
      <tbody>{grid}</tbody>
    </table>
  );
};

export default ViewGrid;
