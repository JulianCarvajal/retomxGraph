// Es el componente principal que gestiona la instancia del grafo 
// y la comunicación entre los componentes.
import React, { useEffect, useRef, useState } from 'react';
import mxGraph from 'mxgraph';
import Toolbar from './Toolbar';
import GraphContainer from './GraphContainer';
import { getGraphXML, insertNode } from '../utils/graphUtils';

// Componente del editor
const GraphEditor = () => {
  const graphRef = useRef(null);
  const containerRef = useRef(null);
  const [xml, setXml] = useState('');

  useEffect(() => {
    const { mxGraph, mxRubberband } = mxGraph();
    const graph = new mxGraph(containerRef.current);
    new mxRubberband(graph);

    graphRef.current = graph;

    return () => {
      graph.destroy();
    };
  }, []);

  const updateXml = () => {
    const xml = getGraphXML(graphRef.current);
    setXml(xml);
  };

  const handleInsertNode = () => {
    insertNode(graphRef.current);
    updateXml();
  };

  return (
    <div className="graph-editor">
      <Toolbar onInsertNode={handleInsertNode} />
      <GraphContainer ref={containerRef} />
      <XMLViewer xml={xml} />
    </div>
  );
};

export default GraphEditor;
