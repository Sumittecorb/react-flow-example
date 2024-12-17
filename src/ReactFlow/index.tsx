import React, { useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import Sidebar from "./Sidebar";
import Nodes from "./Nodes/Custom";
import NumberNodes from "./Nodes/NumberNode";
import OutputNode from "./Nodes/OutputNode";
import DefaultNode from "./Nodes/DefaultNode";
import InputNode from "./Nodes/InputNode";

// import "./index.css";
const nodeTypes = {
  custom: Nodes,
  number: NumberNodes,
  outputs: OutputNode,
  defaults: DefaultNode,
  inputs:  InputNode,
};
const initialNodes = [
  {
    id: "1",
    type: "dafault",
    data: { label: "Default node" },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition]
  );

  return (
    <div className="dndflow">
      <Sidebar />
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

const ReactFlows = () => (
  <ReactFlowProvider>
    <DnDFlow />
  </ReactFlowProvider>
);
export default ReactFlows;
