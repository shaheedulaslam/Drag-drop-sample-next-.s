// import React, { useState } from "react";

// const DragAndDropExample = ({
//   onDrop,
//   droppedItems,
//   onDeleteItem,
//   onUpdateItem,
//   onAddSection,
// }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedText, setEditedText] = useState("");

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const index = e.dataTransfer.getData("text/plain");
//     onDrop(index);
//   };

//   // const handleEdit = (index, text) => {
//   //   setEditingIndex(index);
//   //   console.log(text,"edi");
//   //   setEditedText(text);
//   // };

//   const handleSaveEdit = (index) => {
//     onUpdateItem(index, editedText);
//     setEditingIndex(null);
//     setEditedText("");
//   };

//   const handleonChange = (e) => {
//     setEditedText(e);
//     onUpdateItem(editedText, e);
//   };

//   const handleAddSection = () => {
//     onAddSection();
//   };

//   return (
//     <>
//     <div className="flex justify-center">
//     <button className="text-center bg-violet-600 px-2 font-bold my-1 text-xl animate-bounce rounded-full" onClick={handleAddSection}>+</button>
//     </div>
//     <div className="text-center">
//       <div
//         id="div1"
//         onDrop={handleDrop}
//         onDragOver={(e) => e.preventDefault()}
//         class="px-2 rounded"
//       >
//         <div className="grid grid-cols-1 gap-4">
//           {droppedItems.map((item, index) => (
//             <>
//               <div
//                 key={index}
//                 className="flex relative rounded h-28 dark:bg-gray-800 p-2"
//               >
//                 {index === editingIndex ? (
//                   <>
//                     <input
//                       type="text"
//                       value={editedText.type}
//                       className="bg-gray-800 border-none border-gray-800 focus:outline-none text-center"
//                       onChange={(e) => handleonChange(e.target.value)} />
//                     <button
//                       onClick={() => handleSaveEdit(index)}
//                       className="absolute top-0 right-3.5 my-2"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="25"
//                         height="25"
//                         fill="skyblue"
//                         class="bi bi-check2-circle"
//                         viewBox="0 0 16 16"
//                       >
//                         {" "}
//                         <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />{" "}
//                         <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />{" "}
//                       </svg>
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => onDeleteItem(index)}
//                       className="absolute top-0 right-0 animate-bounce"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         fill="red"
//                         class="bi bi-trash-fill"
//                         viewBox="0 0 16 16"
//                       >
//                         {" "}
//                         <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />{" "}
//                       </svg>
//                     </button>
//                     {item.content ? item.content : item}
//                   </>
//                 )}
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </div></>
//   );
// };

// export default DragAndDropExample;




// import React, { useState } from "react";

// const DragAndDropExample = ({
//   onDrop,
//   droppedItems,
//   onDeleteItem,
//   onUpdateItem,
//   onAddSection,
//   section
// }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedText, setEditedText] = useState("");


//   const handleDrop = (e) => {
//     e.preventDefault();
//     const index = e.dataTransfer.getData("text/plain");
//     onDrop(index, e?.target?.id);
//   };

//   // const handleEdit = (index, text) => {
//   //   setEditingIndex(index);
//   //   console.log(text,"edi");
//   //   setEditedText(text);
//   // };

//   const handleSaveEdit = (index) => {
//     onUpdateItem(index, editedText);
//     setEditingIndex(null);
//     setEditedText("");
//   };

//   const handleonChange = (e) => {
//     setEditedText(e);
//     onUpdateItem(editedText, e);
//   };

//   const handleAddSection = () => {
//     onAddSection();
//   };

//   console.log(section, "itemss");

//   return (
//     <>
//       <div>
//         <button className="text-center bg-violet-600 px-2 font-bold my-1 text-xl animate-bounce rounded-full" onClick={handleAddSection}>+</button>
//       </div>
//       <div className="text-center">
//         <div
//           id="div1"
//           onDrop={handleDrop}
//           onDragOver={(e) => e.preventDefault()}
//           class="px-2 rounded"
//         >
//           <div className="grid grid-cols-1 gap-4" id="section">
//             {section.map((item, index) => (
//               <>
//                 <div
//                   key={index}
//                   id={item.sectionId}
//                   className="flex relative rounded h-72 dark:bg-gray-800 p-2"
//                 >
//                   <button
//                     onClick={() => handleSaveEdit(index)}
//                     className="absolute top-0 right-7"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="25"
//                       height="25"
//                       fill="skyblue"
//                       class="bi bi-check2-circle"
//                       viewBox="0 0 16 16"
//                     >
//                       {" "}
//                       <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />{" "}
//                       <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />{" "}
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => onDeleteItem(index)}
//                     className="absolute top-0 right-0 animate-bounce"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       fill="red"
//                       class="bi bi-trash-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       {" "}
//                       <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />{" "}
//                     </svg>
//                   </button>
//                   {item?.content ? item?.content : item}
//                   {item?.content?.map((item, index) => (
//                     <div id="content" key={index} draggable>
//                       {item?.content}
//                     </div>
//                   ))}
//                 </div>
//               </>
//             ))}

//           </div>
//         </div>
//       </div></>
//   );
// };

// export default DragAndDropExample;










import React, { useState } from "react";
import { Section1, Section2, Section3, Section4 } from "../sections/Sections";

const DragAndDropExample = ({
  onDrop,
  droppedItems,
  onDeleteItem,
  onUpdateItem,
  onAddSection,
  section,
}) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);
  const [showComponent, setShowComponent] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const index = e?.dataTransfer?.getData("text/plain");
    onDrop(index, e?.target?.id);
  };

  // const handleEdit = (index, text) => {
  //   setEditingIndex(index);
  //   console.log(text,"edi");
  //   setEditedText(text);
  // };

  const handleSaveEdit = (index) => {
    onUpdateItem(index, editedText);
    setEditingIndex(null);
    setEditedText("");
  };

  const handleonChange = (e) => {
    setEditedText(e);
    onUpdateItem(editedText, e);
  };

  const handleAddSection = () => {
    setSelectedSection(null);
    setShowComponent(true);
    onAddSection();

  };

  const handleSelectSection = (event) => {
    setSelectedSection(event.target.value);
    setShowComponent(true);
  };

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "Section1":
        return <Section1 onDrop={handleDrop} children={section} onDeleteItem={onDeleteItem}/>;
      case "Section2":
        return <Section2 onDrop={handleDrop} children={section} onDeleteItem={onDeleteItem}/>;
      case "Section3":
        return <Section3 onDrop={handleDrop} children={section} onDeleteItem={onDeleteItem}/>;
      case "Section4":
        return <Section4 onDrop={handleDrop} children={section} onDeleteItem={onDeleteItem}/>;
      default:
        return null;
    }
  };


  return (
    <>
    <div className="grid grid-rows-1">
    <div className="flex justify-center space-x-1">
        <div>
          <button
            className="text-center bg-violet-600 px-2 font-bold my-1 text-xl animate-bounce rounded-full"
            onClick={handleAddSection}
          >
            +
          </button>
        </div>
        {showComponent && (
          <div>
            <select onChange={handleSelectSection} className="bg-blue-200 text-black px-3 py-1 rounded-xl">
              <option value="">Select a Section</option>
              <option value="Section1">Section 1</option>
              <option value="Section2">Section 2</option>
              <option value="Section3">Section 3</option>
              <option value="Section4">Section 4</option>
            </select>
          </div>
        )}
      </div>
      <div>
    {showComponent && renderSelectedSection()}
</div>
    </div>

    </>
  );
};

export default DragAndDropExample;

