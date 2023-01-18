import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";
import CustomNodeI from "../atom/CustomNodeI";
import "../../tailwind.config";

const nodeTypes = {
  custom: CustomNodeI,
};

export default function MobileStackI() {
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "1-3", source: "1", target: "3" },
    { id: "1-4", source: "1", target: "4" },
  ];

  const initialNodes = [
    {
      id: "1",
      data: { label: "Indigo's Services" },
      position: { x: 200, y: 0 },
    },
    {
      id: "2",
      data: { label: "Database intergrations" },
      position: { x: 100, y: 100 },
    },
    {
      id: "3",
      data: { label: "Database Scalling " },
      position: { x: 50, y: 200 },
    },
    {
      id: "4",
      data: { label: "Database Metrics" },
      position: { x: 0, y: 300 },
    },
  ];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const dtaa = [1, 2, 3, 4];

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div className="h-screen font-inter w-full p-4 sticky top-0 bg-gradient-to-r pt-16 pb-16 from-gray-100 font-lora to-gray-200 flex-col justify-center  flex items-center ">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        panOnDrag={false}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitViewOptions={{ maxZoom: 3 }}
        fitView={true}
        onEdgesChange={onEdgesChange}
        connectionLineStyle={{
          stroke: "azure",
        }}
        className="lg:p-8"
        defaultEdgeOptions={{ animated: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
