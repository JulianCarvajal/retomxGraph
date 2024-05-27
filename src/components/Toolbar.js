// Componente con los botones que permiten manipular el graph
import React from 'react';
import './Toolbar.css';

const Toolbar = ({ onInsertRectangle, onInsertCircle, onInsertTriangle, onInsertRhombus, onInsertHexagon, onInsertEdge, onDelete, onGroup, onUngroup }) => {
  return (
    <div className="toolbar">
      <button onClick={onInsertRectangle}>Rectangulo</button>
      <button onClick={onInsertCircle}>Elipse</button>
      <button onClick={onInsertTriangle}>Triangulo</button>
      <button onClick={onInsertRhombus}>Rombo</button>
      <button onClick={onInsertHexagon}>Hexagono</button>
      <button onClick={onInsertEdge}>Arista</button>
      <button onClick={onDelete}>Eliminar</button>
      <button onClick={onGroup}>Agrupar</button>
      <button onClick={onUngroup}>Desagrupar</button>
    </div>
  );
};

export default Toolbar;
