import React from "react";

export const myname = "Jari";

export const mm = [
    { mymessage_id: 1, text: "Check equipment.", time: "now"},
    { mymessage_id: 2, text: "And send thermal photo of connection point P1.", time: "now"}
];

export default function MyMessage( { mymessage } ) {
  return (
    <div>
      <span class="jari">{myname}</span>
      <div className="flex-row-dc">
        <div className="button-2">
          <div className="background-3">
              <span className="check-equipment">
                {mymessage ? mymessage.text : "текст не отобразился"}
              </span>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
}
