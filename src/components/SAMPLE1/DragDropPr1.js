// import React, { useRef, useState } from "react";
// import DragAndDropExample from "./DragDrop1Pr2";

// export default function DragDrop() {
//   const dragOverItem = useRef();
//   const [list, setList] = useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//   ]);
//   const [droppedItems, setDroppedItems] = useState([]);

//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData("text/plain", index);
//   };

//   const dragEnter = (e, position) => {
//     dragOverItem.current = position;
//     e.target.style.cursor = "move";
//   };

//   const handleDrop = (index) => {
//     const selectedItem = list[index];
//     const updatedList = list.filter((_, i) => i !== index);
//     setList(updatedList);
//     setDroppedItems([...droppedItems, selectedItem]);
//   };

//   const handleDeleteItem = (index) => {
//     const updatedDroppedItems = droppedItems.filter((_, i) => i !== index);
//     setDroppedItems(updatedDroppedItems);
//   };

//   const handleUpdateItem = (index, newText) => {
//     const updatedDroppedItems = droppedItems.map((item, i) =>
//       i === index ? newText : item
//     );
//     setDroppedItems(updatedDroppedItems);

//     const updatedList = list.map((item, i) => (i === index ? newText : item));
//     setList(updatedList);
//   };


//   return (
//     <>
//       <div className="grid grid-cols-2">
//         <div className="col-span-1 h-full">
//           {list.map((item, index) => (
//             <div
//               key={index}
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragEnd={(e) => dragEnter(e, index)}
//               draggable
//               contentEditable="true"
//               suppressContentEditableWarning={true}
//               onBlur={(e) => handleUpdateItem(index, e.currentTarget.textContent)}
//               className="m-2 p-4 bg-blue-200 cursor-move text-black"
//             >
//                 {item}
//               </div>
//           ))}
//         </div>
//         <div className="col-span-1 h-full bg-white">
//           <DragAndDropExample
//             droppedItems={droppedItems}
//             onDrop={handleDrop}
//             onDeleteItem={handleDeleteItem}
//             onUpdateItem={handleUpdateItem}
//           />
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import DragAndDropExample from "./DragDrop1Pr2";
import { ParagraphInput } from "@/utils/ParagraphInput";
import { VideoUploader } from "@/utils/VideoUploader";
import { HeadingEditor, TextEditor } from "@/utils/TextEditor";
import { ImageUploader } from "@/utils/ImageUploader";

const button = [
  {id:0, name:'TextEditor',icon:"",path:"" ,bgcolor:""},
  {id:1, name:'paragraph',icon:"",path:"" ,bgcolor:""},
  {id:2, name:'image',icon:"",path:"" ,bgcolor:""},
  {id:3, name:'Heading',icon:"",path:"" ,bgcolor:""},
  {id:4, name:'Container',icon:"",path:"" ,bgcolor:""},
  {id:5, name:'video',icon:"",path:"" ,bgcolor:""},
  {id:6, name:'Divider',icon:"",path:"" ,bgcolor:""}

]

export default function DragDrop() {
  const dragOverItem = useRef();
  const [section, setSection ] = useState([])
  const [editedText, setEditedText] = useState("");



  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.target.style.cursor = "move";
  };

  const components = [
    <TextEditor />,
    <ParagraphInput />,
    <ImageUploader />,
    <HeadingEditor />,
    'Container is here',
    <VideoUploader />,
    'Divider is here',
  ];


  const handleDrop = (index , SectionId) => {
    const content = components[index];
    setSection((prevSections) => {
        return prevSections.map((item) => {
            if (item?.sectionId === SectionId) {
                const updatedContent = item.content ? [...item.content, content] : [content];
                return { ...item, content: updatedContent };
            } else {
                return item;
            }
        });
    });

  };

  const handleDeleteItem = (index) => {
    const updatedDroppedItems = section.filter((_, i) => i !== index);
    setSection(updatedDroppedItems);
  };

  const handleUpdateItem = (index, newText) => {
    const updatedDroppedItems = section.map((item, i) =>
      i === index ? newText : item
    );
    setSection(updatedDroppedItems);
    const updatedList = button.map((item, i) => (i === index ? newText : item));
    return updatedList
  };

  const handleAddSection = () => {
    setSection([{sectionId: section && section.length !== 0 ? 'section-' + section.length : 'section-0' , content:[]},...section])
  };




  return (
    <>
      <div className="grid grid-rows-2 my-12">
      <p className="text-center text-4xl">Elementors</p>
        <div className="flex justify-center items-center h-full">
          {button.map((item) => (
            <button
              key={item.id}
              onDragStart={(e) => handleDragStart(e, item.id)}
              onDragEnd={(e) => dragEnter(e, item.id)}
              draggable
              className="m-2 p-4 bg-blue-200 cursor-move text-black"
            >
                {item.name}
              </button>
          ))}
        </div>
        <div className="p-3">
        <DragAndDropExample
        onDrop={handleDrop}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onAddSection={handleAddSection}
        section={section}
      />
        </div>
      </div>

    </>
  );
}




