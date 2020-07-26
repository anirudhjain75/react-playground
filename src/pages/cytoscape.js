import React from 'react';
import cytoscape from 'cytoscape';
import { TextField } from '@material-ui/core';

const executeCy = () => {
  const temp = document.getElementById('cy')
  cytoscape({
    container: temp,
    elements: [
      { data: { id: 'one', label: 'Node 1', endPoint: 'n1' }},
      { data: { id: 'two', label: 'Node 2', endPoint: 'n2' }},
      { data: { id: 'three', label: 'Node 3', endPoint: 'n3'}},
      { data: { id: 'four', label: 'Node 4', endPoint: 'n4' }},
      { data: { id: 'five', label: 'Node 5', endPoint: 'n5' }},
      { data: { id: 'six', label: 'Node 6', endPoint: 'n6'}},
      { data: { id: 'seven', label: 'Node 7', endPoint: 'n7' }},
      { data: { id: 'eight', label: 'Node 8', endPoint: 'n8' }},
      { data: { id: 'nine', label: 'Node 9', endPoint: 'n9'}},
      { data: { id: 'ten', label: 'Node 10', endPoint: 'n10' }},
      { data: { id: 'eleven', label: 'Node 11', endPoint: 'n11' }},
      { data: { id: 'twelve', label: 'Node 12', endPoint: 'n12'}},
      { data: { source: 'ten', target: 'two', label: '10 to 2' }},
      { data: { source: 'ten', target: 'three', label: '10 to 3' }},
      { data: { source: 'ten', target: 'four', label: '10 to 4' }},
      { data: { source: 'one', target: 'five', label: '1 to 5' }},
      { data: { source: 'six', target: 'eight', label: '6 to 8' }},
    ],
    style: [
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
      }
    ],
    layout: {
      name: 'circle'
    }
  })
}

const Cytoscape = () => {

  React.useEffect(() => {
    executeCy()
  })

  return (
    <>
      <div id="cy" style={{height: 500, width: 500}}>
      </div>
      <TextField value={'chocolate'}/>
    </>
  )
};

export default Cytoscape;
