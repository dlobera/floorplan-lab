import React from 'react';
import ReactDOM from 'react-dom/client';
import FloorPlan from './FloorPlan';


import './index.css';


function App() {
  return (
    <FloorPlan />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


