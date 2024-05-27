// Componente con los botones que permiten manipular el graph
import React from 'react';

const Toolbar = ({ onInsertNode }) => {
  return (
    <div className="toolbar">
      <button onClick={onInsertNode}>Insert Node</button>
    </div>
  );
};

export default Toolbar;
