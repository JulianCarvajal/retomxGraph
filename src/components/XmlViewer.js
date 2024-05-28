// Componente que muestra el XML del graph
import React from 'react';
import './XmlViewer.css';

const XMLViewer = ({ xml }) => {
  return (
    <div className="xml-viewer">
      <h2 className="xml-title">Código XML</h2>
      <textarea readOnly value={xml}></textarea>
    </div>
  );
};

export default XMLViewer;