import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '../flowchart/CustomNode';

const initialNodes = [
  { id: '1', type: 'custom_node', position: { x: 0, y: 400 }, data: { label: 'Find Basic Info On Country' }, visible: false },
  { id: '2', type: 'custom_node', position: { x: 500, y: 200 }, data: { label: 'Predict Optimal Emissions' }, visible: false },
  { id: '3', type: 'custom_node', position: { x: 300, y: 400 }, data: { label: 'Detect Similar Countries' }, visible: false },
  { id: '4', type: 'custom_node', position: { x: 550, y: 400 }, data: { label: 'Find Similar Policies' }, visible: false },
  { id: '5', type: 'custom_node', position: { x: 800, y: 400 }, data: { label: 'Summarize Similar Policies' }, visible: false },
  { id: '6', type: 'custom_node', position: { x: 1100, y: 400 }, data: { label: 'Generate Updated Policy' }, visible: false },
  { id: '7', type: 'custom_node', position: { x: 250, y: 600 }, data: { label: 'Discover Current Policies' }, visible: false },
  { id: '8', type: 'custom_node', position: { x: 650, y: 600 }, data: { label: 'Summarize Current Policies' }, visible: false },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e3-2', source: '3', target: '2', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e1-7', source: '1', target: '7', animated: true },
  { id: 'e7-8', source: '7', target: '8', animated: true },
  { id: 'e8-6', source: '8', target: '6', animated: true },
  { id: 'e2-6', source: '2', target: '6', animated: true },
];

const custom_node = { 'custom_node': CustomNode };

function Nodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const revealNodes = async () => {
      for (let i = 0; i < initialNodes.length; i++) {
        setTimeout(() => {
          setNodes(prevNodes => prevNodes.map((node, index) => index === i ? { ...node, visible: true } : node));
        }, i * 500); // Adjust the time lag here (500ms in this example)
      }
    };
    revealNodes();
  }, [setNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes.filter(node => node.visible)} // Only show visible nodes
        edges={edges}
        nodeTypes={custom_node}
        onNodesChange={onNodesChange}
        defaultViewport={{ x: 0, y: -100, zoom: 0.6 }}
      />
    </div>
  );
}

const countryDataToContent = (country) => {
  return (
    <div>
      <h3>
        Country: {country.country}
      </h3>
      <Nodes />
    </div>
  )
}

export default countryDataToContent;
