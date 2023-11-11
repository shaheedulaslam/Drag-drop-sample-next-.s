import React from "react";

const DragAndDropExample = ({ onDrop, droppedItems,onDeleteItem }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const index = e.dataTransfer.getData("text/plain");
    onDrop(index);
  };
  return (
    <div className="text-center">
      <div
        id="div1"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        class="py-8 mb-4 rounded bg-gray-50"
      >
        {droppedItems.length === 0 ?
          <div className="flex items-center justify-center text-black">
          <p className="text-center">+</p>
         </div>:''}
        <div className="grid grid-cols-2 gap-4">
          {droppedItems.map((item, index) => (
            <>
            <div
                  key={index}
                  className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
              >
                         <button onClick={() => onDeleteItem(index)} className="">delete</button>
                  {item}
              </div>
              </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDropExample;
