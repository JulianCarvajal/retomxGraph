// Componente donde se renderiza el graph
// Es el "Lienzo" para trabajar
import React, { forwardRef } from 'react';

const GraphContainer = forwardRef((props, ref) => {
  return <div className="graph-container" ref={ref}></div>;
});

export default GraphContainer;