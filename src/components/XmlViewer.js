// Componente que muestra el XML del graph
import React from 'react';

const XMLViewer = ({ xml }) => {
  return (
    <div className="xml-viewer">
      <textarea readOnly value={xml}></textarea>
    </div>
  );
};

export default XMLViewer;
