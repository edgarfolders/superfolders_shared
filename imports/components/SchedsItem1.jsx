import React from "react";

export const s = [
    { sched_id: 1, title: "Equipment...", time: "Tuesdays at 9 am", status: "active"},
    { sched_id: 2, title: "Maintenance...", time: "Wednesdays at 10 am", status: "active"},
];  


export default function SchedsItem1( { sched } ) {
  return (
    <div className="groups-5f">
      <div className="background-60">
        <div className="image-61"></div>
        <span className="equipment-62">{sched.title}</span>
        <div className="image-63"></div>
        <span className="tuesdays-at-9am">{sched.time}</span>
      </div>
    </div>
  );
}
