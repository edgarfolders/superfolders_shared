import React from "react";

export const robotsname = "DoggyMan573";

export const rm = [
  {robotsmessage_id: 1, text: "Inspection underway.", time: "now"},
]

export default function RobotsMessage( { robotsmessage } ) {
  return (
    <div className="flex-row-e">
      <span className="doggyman">{robotsname}</span>
      <div className="groups-4">
        <div className="button-5">
          <div className="background-6">
            <span className="inspection-underway">
              {robotsmessage ? robotsmessage.text : "текст не отобразился"}
            </span>
          </div>
        </div>
      </div>
      <div className="image-7"></div>
    </div>
  );
}
