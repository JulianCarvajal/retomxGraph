// Componente que muestra el XML del graph
import React from 'react';
import './XmlViewer.css';

const XMLViewer = ({ xml }) => {

  const handleExportXML = () => {
    const blob = new Blob([xml], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'graph.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="xml-viewer">
      <h2 className="xml-title">Código XML</h2>
      <textarea readOnly value={xml}></textarea>
      <button onClick={handleExportXML}>Exportar XML</button>
    </div>
  );
};

export default XMLViewer;