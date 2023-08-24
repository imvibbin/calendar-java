import React, { useState } from "react";

const Test = () => {
  const [draggedCell, setDraggedCell] = useState<HTMLElement | null>(null);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setDraggedCell(event.currentTarget);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (draggedCell) {
      const targetCell = event.currentTarget;

      // Swap the contents of the dragged cell and the target cell
      const temp = draggedCell.innerHTML;
      draggedCell.innerHTML = targetCell.innerHTML;
      targetCell.innerHTML = temp;

      setDraggedCell(null);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div
          className="col-3 border border-black ms-1"
          draggable
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          1
        </div>
        <div
          className="col-3 border border-black ms-1"
          draggable
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          2
        </div>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-3 border border-black ms-1"
          draggable
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          3
        </div>
        <div
          className="col-3 border border-black ms-1"
          draggable
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          4
        </div>
      </div>
    </>
  );
};

export default Test;
