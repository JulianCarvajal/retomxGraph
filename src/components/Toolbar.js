// Componente con los botones que permiten manipular el graph
import React from 'react';
import './Toolbar.css';

const Toolbar = ({ onInsertNode, onInsertEdge, onDelete }) => {
  return (
    <div className="toolbar">
      <button onClick={onInsertNode}>Insert Node</button>
      <button onClick={onInsertEdge}>Insert Edge</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Toolbar;
