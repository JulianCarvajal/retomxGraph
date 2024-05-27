// Es el componente principal que gestiona la instancia del grafo 
// y la comunicación entre los componentes.
import React, { useEffect, useRef, useState } from 'react';
import mxGraphFactory from 'mxgraph';
import Toolbar from './Toolbar';
import GraphContainer from './GraphContainer';
import XMLViewer from './XmlViewer'; // Importar XMLViewer
import { getGraphXML, insertNode, insertEdge } from '../utils/graphUtils';
import './GraphEditor.css';

const mx = mxGraphFactory();

const GraphEditor = () => {
  const graphRef = useRef(null);
  const containerRef = useRef(null);
  const [xml, setXml] = useState('');

  useEffect(() => {
    const { mxGraph, mxRubberband } = mx;
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

  const handleInsertEdge = () => {
    insertEdge(graphRef.current);
    updateXml();
  };

  return (
    <>
        <div className="graph-editor">
            <Toolbar onInsertNode={handleInsertNode} onInsertEdge={handleInsertEdge} />
            <GraphContainer ref={containerRef} />
        </div>
        <XMLViewer xml={xml} />
    </>
  );
};

export default GraphEditor;