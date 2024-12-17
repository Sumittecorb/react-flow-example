import React, { useState } from "react";

export default () => {
  const [isshow, setisshow] = useState(false);
  const [isnewshow, setisnewshow] = useState(false);
  const [issub, setissub] = useState(false);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const toggleShow = () => {
    setisshow(!isshow);
  };

  const newtoggelshow = () => {
    setisnewshow(!isnewshow);
  };

  const subtoggle = (event) => {
    event.stopPropagation();
    setissub(!issub);
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
        Schema
        {isshow && (
          <div className="SUbmenu-list">
            <ul>
              <li>
                <div
                  onClick={subtoggle}
                  className={`dndnodes input ${issub ? "arrows" : ""}`}
                >
                  Input Node
                  {issub && (
                    <div className="SUbmenu-lists">
                      <ul>
                        <li>
                        
                            <div
                              className="text-xs w-16 ml-2"
                              onDragStart={(event) => onDragStart(event, "inputs")}
                              draggable
                            >
                               Default
                            
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="dndnodes outputs"
                  onDragStart={(event) => onDragStart(event, "outputs")}
                  draggable
                >
                  Output Node
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "default")}
                  draggable
                >
                  Default Node
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "custom")}
                  draggable
                >
                  Custom
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "number")}
                  draggable
                >
                  Number
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        onClick={newtoggelshow}
        className={`dndnode inputs ${isnewshow ? "arrow" : ""}`}
        draggable
      >
        ER Diagram
        {isnewshow && (
          <div className="SUbmenu-list">
            <ul>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "inputs")}
                  draggable
                >
                  Input Node
                </div>
              </li>
              <li>
                <div
                  className="dndnodes outputs"
                  onDragStart={(event) => onDragStart(event, "outputs")}
                  draggable
                >
                  Output Node
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "default")}
                  draggable
                >
                  Default Node
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "custom")}
                  draggable
                >
                  Custom
                </div>
              </li>
              <li>
                <div
                  className="dndnodes"
                  onDragStart={(event) => onDragStart(event, "number")}
                  draggable
                >
                  Number
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};
