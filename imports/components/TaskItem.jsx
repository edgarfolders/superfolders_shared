// imports/ui/components/TaskItem.jsx
import React from "react";
import { createRoot } from "react-dom/client";


export const t = [
    { _id: 1, title: "Первый таск", status: "active"},
    { _id: 2, title: "Второй таск", status: "done"},
    { _id: 3, title: "Третий таск", status: "done"},
];


    
export default function TaskItem({ task }) {
  return (
    <div>
        <div className="groups-24"> 
          <div className="background-2f">
              <div className="image-30" />
              <div className="flex-column-a">
                  <span className="equipment-31">{task.title}</span>
                  <span className="scheduled">{task.status}</span>
              </div>
              <div className="image-32" />
          </div>
        </div>        

    </div>
  );
}

