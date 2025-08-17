// imports/ui/components/TaskItem.jsx
import React from "react";

export default function TaskItem({ title, subtitle, className }) {
  return (
    <div className={`groups-26 ${className || ""}`}>
      <div className="image-27" />
      <div className="flex-column-f">
        <span className="perimeter-check">{title}</span>
        <span className="completed">{subtitle}</span>
      </div>
      <div className="background-28" />
    </div>
  );
}
