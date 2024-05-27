import mxGraphFactory from 'mxgraph';

const mx = mxGraphFactory();
const { mxCodec, mxUtils } = mx;

export const getGraphXML = (graph) => {
  const encoder = new mxCodec();
  const node = encoder.encode(graph.getModel());
  return mxUtils.getPrettyXml(node);
};

export const insertNode = (graph) => {
  const parent = graph.getDefaultParent();
  graph.getModel().beginUpdate();
  try {
    graph.insertVertex(parent, null, 'Node', 20, 20, 80, 30);
  } finally {
    graph.getModel().endUpdate();
  }
};

export const insertEdge = (graph) => {
    const parent = graph.getDefaultParent();
    const vertices = graph.getChildVertices(parent);
    console.log(vertices)
    if (vertices.length >= 2) {
      const source = vertices[0];
      const target = vertices[1];
      graph.getModel().beginUpdate();
      try {
        graph.insertEdge(parent, null, '', source, target);
      } finally {
        graph.getModel().endUpdate();
      }
    } else {
      alert('Necesitas mínimo dos nodos para insertar un vértice');
    }
};

export const deleteCell = (graph, cell) => {
    graph.getModel().beginUpdate();
    try {
      graph.removeCells([cell]);
    } finally {
      graph.getModel().endUpdate();
    }
};