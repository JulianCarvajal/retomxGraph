// Es el componente principal que gestiona la instancia del grafo 
// y la comunicación entre los componentes.
import React, { useEffect, useRef, useState } from 'react';
import mxGraphFactory from 'mxgraph';
import Toolbar from './Toolbar';
import GraphContainer from './GraphContainer';
import XMLViewer from './XmlViewer'; // Importar XMLViewer
import { getGraphXML, insertNode, insertEdge, deleteCell } from '../utils/graphUtils';
import './GraphEditor.css';

const mx = mxGraphFactory();

const GraphEditor = () => {
  const graphRef = useRef(null);
  const containerRef = useRef(null);
  const [xml, setXml] = useState('');
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    const { mxGraph, mxRubberband, mxEvent } = mx;
    const graph = new mxGraph(containerRef.current);
    new mxRubberband(graph);

    graphRef.current = graph;

    // Escuchador para modificar cuando el grafo cambia
    graph.getModel().addListener(mxEvent.CHANGE, () => {
      updateXml();
    });

    // Escuchador para la selección de celdas (Necesario para la eliminación)
    const selectionHandler = (sender, evt) => {
      const cell = graph.getSelectionCell();
      setSelectedCell(cell);
    };

    graph.getSelectionModel().addListener(mxEvent.CHANGE, selectionHandler);

    return () => {
      graph.getSelectionModel().removeListener(selectionHandler);
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

  const handleDelete = () => {
    if (selectedCell) {
      deleteCell(graphRef.current, selectedCell);
      setSelectedCell(null); // Reset selected cell after deletion
      updateXml();
    }
  };

  return (
    <>
        <div className="graph-editor">
            <Toolbar onInsertNode={handleInsertNode} onInsertEdge={handleInsertEdge} onDelete={handleDelete} />
            <GraphContainer ref={containerRef} />
        </div>
        <XMLViewer xml={xml} />
    </>
  );
};

export default GraphEditor;