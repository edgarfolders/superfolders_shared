import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '/imports/css/index.css';
import LeftPanel from "/imports/components/LeftPanel";
import RightPanel from "/imports/components/RightPanel.jsx";

 const task = [  
  { title: "Perimeter Check", subtitle: "common task", status: "completed" },
  { title: "Perimeter Check", subtitle: "common task", status: "completed" },
  { title: "Perimeter Check", subtitle: "common task", status: "completed" }]

export default function App() {
  return (
  <div className="game">
    <div className="main-container">
      <div className="root">
        <div className="groups">
        
          <div>
            <LeftPanel />
          </div>
          
          <div>
            <RightPanel />
          </div>

          <div className="background-66" />
        </div>
      </div>
    </div>
  </div>
  


      

  );
}
 