import mxGraphFactory from 'mxgraph';

const mx = mxGraphFactory();
const { mxCodec, mxUtils } = mx;

export const getGraphXML = (graph) => {
  const encoder = new mxCodec();
  const node = encoder.encode(graph.getModel());
  return mxUtils.getPrettyXml(node);
};

export const insertNode = (graph, shapeType) => {
  const parent = graph.getDefaultParent();
  graph.getModel().beginUpdate();
  try {
    switch (shapeType) {
      case 'rectangle':
        graph.insertVertex(parent, null, 'Rectangulo', 20, 20, 120, 60);
        break;
      case 'circle':
        graph.insertVertex(parent, null, 'Elipse', 20, 20, 60, 60, 'shape=ellipse');
        break;
      case 'triangle':
        graph.insertVertex(parent, null, 'Triangulo', 20, 20, 60, 60, 'shape=triangle');
        break;
      case 'rhombus':
        graph.insertVertex(parent, null, 'Rombo', 20, 20, 80, 80, 'shape=rhombus');
        break;
      case 'hexagon':
        graph.insertVertex(parent, null, 'Hexagono', 20, 20, 80, 80, 'shape=hexagon');
        break;
      default:
        graph.insertVertex(parent, null, 'Rectangulo', 20, 20, 120, 60);
        break;
    }
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