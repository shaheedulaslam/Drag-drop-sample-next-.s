import React, { useRef, useState } from "react";
import DragAndDropExample from "./DragDrop1";

export default function DragDrop() {
  const dragOverItem = useRef();
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.target.style.cursor = "move";
  };

  const handleDrop = (index) => {
    const selectedItem = list[index];
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    setDroppedItems([...droppedItems, selectedItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedDroppedItems = droppedItems.filter((_, i) => i !== index);
    setDroppedItems(updatedDroppedItems);
  };

  const handleUpdateItem = (index, newText) => {
    const updatedDroppedItems = droppedItems.map((item, i) =>
      i === index ? newText : item
    );
    setDroppedItems(updatedDroppedItems);
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-1 h-full">
          {list.map((item, index) => (
            <div
              key={index}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={(e) => dragEnter(e, index)}
              draggable
              className="m-2 p-4 bg-blue-200 cursor-move"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="col-span-1 h-full bg-white">
          <DragAndDropExample
            droppedItems={droppedItems}
            onDrop={handleDrop}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
          />
        </div>
      </div>
    </>
  );
}
