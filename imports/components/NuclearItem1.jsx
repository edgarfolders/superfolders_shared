import React from "react";

export const n = [
    { nuclear_id: 1, title: "Control Rooms", status: "active"},
    { nuclear_id: 2, title: "Turbine Buildings", status: "active"},
    { nuclear_id: 3, title: "Cooling Systems", status: "active"},
    { nuclear_id: 1, title: "Control Rooms", status: "active"},
    { nuclear_id: 2, title: "Turbine Buildings", status: "active"},
    { nuclear_id: 3, title: "Cooling Systems", status: "active"},
];

export default function NuclearItem1( {nuclear} ) {
  return (
    <div className="groups-49">
      <div className="background-4a">
        <div className="groups-4b">
          <div className="background-4c">
            <div className="background-4d"></div>
          </div>
        </div>
        <span className="control-rooms">{nuclear.title}</span>
        <div className="image-4e"></div>
      </div>
    </div>
  );
}
