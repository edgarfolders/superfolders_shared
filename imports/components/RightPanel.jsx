import React from "react";       
import RightPanelHeading from "/imports/components/RightPanelHeading.jsx";
import PhotoReports from "/imports/components/PhotoReports.jsx";
import MyMessage from "/imports/components/MyMessage.jsx";
import RobotsMessage from "/imports/components/RobotsMessage.jsx";

export default function RightPanel() {
  return (
    <div className="background">
      <RightPanelHeading />

    
      <MyMessage />
      <RobotsMessage />

      <PhotoReports />
      
      <span className="technical-description">Technical Description</span>
      <div className="background-14"></div>
      <div className="groups-15">
        <span className="route-distance">Route Distance</span>
        <span className="km">5 km</span>
      </div>
      <div className="background-16"></div>
      <div className="groups-17">
        <span className="estimated-return-time">Estimated Return Time</span>
        <span className="hours">2 hours</span>
      </div>
      <div className="background-18"></div>
      <div className="groups-19">
        <span className="lidar-nir-camera">LIDAR, NIR Camera, Thermal Camera</span>
        <span className="equipment-used">Equipment Used</span>
      </div>
      <div className="background-1a"></div>
      <div className="flex-row">
        <span className="robot-charge-level">Robot Charge Level</span>
        <span className="percentage">95%</span>
      </div>
      <div className="background-1b"></div>
      <div className="flex-row-f">
        <span className="robot-model">Robot Model</span>
        <span className="unitree-go-pro">Unitree Go2 Pro</span>
      </div>
    </div>
  );
}
