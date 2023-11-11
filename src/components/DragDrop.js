// import React, { useRef, useState } from 'react';
// import DragAndDropExample from './DragDrop1';

// export default function DragDrop() {
//   const dragItem = useRef();
//   const dragOverItem = useRef();
//   const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

//   const dragStart = (e, position) => {
//     dragItem.current = position;
//     e.target.style.cursor = 'grabbing';
//   };

//   const dragEnter = (e, position) => {
//     dragOverItem.current = position;
//     e.target.style.cursor = 'move'; 
//   };

//   const dragEnd = (e) => {
//     e.target.style.cursor = 'pointer'; 
//   };

//   const drop = () => {
//     const copyListItems = [...list];
//     const dragItemContent = copyListItems[dragItem.current];
//     copyListItems.splice(dragItem.current, 1);
//     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     setList(copyListItems);
//   };

//   return (
//     <>
//       {list &&
//         list.map((item, index) => (
//           <>
//           <div
//             style={{
//               backgroundColor: 'lightblue',
//               margin: '20px 25%',
//               textAlign: 'center',
//               fontSize: '40px',
//               cursor: 'grab', 
//             }}
//             onDragStart={(e) => dragStart(e, index)}
//             onDragEnter={(e) => dragEnter(e, index)}
//             onDragEnd={dragEnd}
//             onDragLeave={dragEnd}
//             onDragOver={(e) => e.preventDefault()} 
//             onDrop={drop}
//             key={index}
//             draggable>
//             {item}
//           </div>
//           </>
//         ))}
//        <DragAndDropExample drop={drop}/>
//     </>
//   );
// }





import React, { useRef, useState } from 'react';
import DragAndDropExample from './DragDrop1';

export default function DragDrop() {
  const dragOverItem = useRef();
  const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };
  
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.target.style.cursor = 'move'; 
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

  return (
    <>
      <div className="flex justify-center flex-wrap">
        {list.map((item, index) => (
          <div
            key={index}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={(e)=> dragEnter(e,index)}
            draggable
            className="m-2 p-4 bg-blue-200 cursor-move"
          >
            {item}
          </div>
        ))}
      </div>
      <DragAndDropExample droppedItems={droppedItems} onDrop={handleDrop} onDeleteItem={handleDeleteItem}/>
    </>
  );
}
