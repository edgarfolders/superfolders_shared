import React from "react";


import TaskbarHeadingTwo from "/imports/components/TaskbarHeadingTwo";
import TaskbarHeadingOne from "/imports/components/TaskbarHeadingOne"; 
import TaskItem from "/imports/components/TaskItem";
import { t } from "/imports/components/TaskItem";
import SchedsHeading from "/imports/components/SchedsHeading";
import SchedsItem1 from "/imports/components/SchedsItem1";
import SchedsItem2 from "/imports/components/SchedsItem2";
import NuclearHeading from "/imports/components/NuclearHeading";
import NuclearDesc from "/imports/components/NuclearDesc";
import NuclearItem1 from "/imports/components/NuclearItem1";
import NuclearItem2 from "/imports/components/NuclearItem2";
import NuclearItem3 from "/imports/components/NuclearItem3";
import NuclearItem4 from "/imports/components/NuclearItem4";
import NuclearItem5 from "/imports/components/NuclearItem5";
import NuclearItem6 from "/imports/components/NuclearItem6";

export default function LeftPanel() {
  return (
    <div className="groups-1c">
      <TaskbarHeadingOne />
      <div className="background-1d">
        <div className="groups-1e">
          <TaskbarHeadingTwo />
          <div className="groups-22">
            <div className="background-23">
              <span className="task-list">Task List</span>
            </div>
          </div>

          <div className="groups-24">
              <div>
                  {t.map(task => (
                    <TaskItem key={task._id} task={task} />
                  ))}
              </div>

            {/* 


*/}

            <div>
              <SchedsHeading />
            </div>

            <div>
              <SchedsItem1 />
            </div>

            <div>
              <SchedsItem2 />
            </div>
            
            <div>
              <NuclearHeading />
            </div>

            <div>
              <NuclearDesc />
            </div>

            <div>
              <NuclearItem1 />
            </div>

            <div>
              <NuclearItem2 />
            </div>

            <div>
              <NuclearItem3 />
            </div>

            <div>
              <NuclearItem4 />
            </div>

            <div>
              <NuclearItem5 />
            </div>

            <div>
              <NuclearItem6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}