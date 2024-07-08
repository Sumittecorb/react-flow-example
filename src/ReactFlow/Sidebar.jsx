import React, { useState } from "react";

export default () => {
  const [isshow, setisshow] = useState(false)
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };


  const toggleShow = () => {
    setisshow(!isshow);
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        onClick={toggleShow}
        className={`dndnode inputs ${isshow ? "arrow" : ""}`}
        draggable
      >
        Input Node
        {isshow && (
          <div className="SUbmenu-list">
            <ul>
              <li><div
                className="dndnodes"
                onDragStart={(event) => onDragStart(event, "inputs")}
                draggable
              >
                Input Node
              </div></li>

              <li>
              <div
                  className="dndnodes outputs"
                  onDragStart={(event) => onDragStart(event, "outputs")}
                  draggable
                >
                  Output Node
                </div></li>


              {/* <li><div
                className="dndnodes"
                onDragStart={(event) => onDragStart(event, "default")}
                draggable
              >
                Default Node
              </div></li> */}

              <li><div
                className="dndnodes"
                onDragStart={(event) => onDragStart(event, "custom")}
                draggable
              >
                Custom
              </div></li>


              <li><div
                className="dndnodes"
                onDragStart={(event) => onDragStart(event, "number")}
                draggable
              >
                Number
              </div></li>

            </ul>
          </div>
        )}
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode outputs"
        onDragStart={(event) => onDragStart(event, "outputs")}
        draggable
      >
        Output Node
      </div>

      <div
        className="dndnode custom"
        onDragStart={(event) => onDragStart(event, "custom")}
        draggable
      >
        Custom
      </div>
      <div
        className="dndnode number"
        onDragStart={(event) => onDragStart(event, "number")}
        draggable
      >
        Number
      </div>
    </aside>
  );
};
