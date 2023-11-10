import React, { useRef, useState } from 'react';

export default function DragDrop() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const dragStart = (e, position) => {
    dragItem.current = position;
    e.target.style.cursor = 'grabbing';
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.target.style.cursor = 'move'; 
  };

  const dragEnd = (e) => {
    e.target.style.cursor = 'pointer'; 
  };

  const drop = () => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: 'lightblue',
              margin: '20px 25%',
              textAlign: 'center',
              fontSize: '40px',
              cursor: 'grab', 
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={dragEnd}
            onDragLeave={dragEnd}
            onDragOver={(e) => e.preventDefault()} 
            onDrop={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
}

