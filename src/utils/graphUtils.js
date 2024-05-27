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