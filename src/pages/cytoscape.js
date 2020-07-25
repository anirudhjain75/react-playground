import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

const App = () => {
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: window.innerWidth * 0.5, y: window.innerHeight * 0.2 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: window.innerWidth * 0.6, y: window.innerHeight * 0.3 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
    { data: { id: 'three', label: 'Node 3'}, position: { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5}},
  ];
  return (
    <CytoscapeComponent
      elements={elements}
      layout={{name: 'preset'}}
      style={{ width: window.innerWidth, height: window.innerHeight }}
      zoomingEnabled={false}
      stylesheet={[
        {
          selector: 'node',
          style: {
            width: 10,
            height: 10,
            shape: 'rectangle',
            label: 'data(label)'
          },
        },
        {
          selector: 'edge',
          style: {
            width: 2,
            label: 'data(label)'
          }
        }]
      }
    />
  )
}

export default App;