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







import React, { useState } from "react";

const DragAndDropExample = ({
  onDrop,
  droppedItems,
  onDeleteItem,
  onUpdateItem,
  onAddSection,
}) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const index = e.dataTransfer.getData("text/plain");
    onDrop(index);
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
    onAddSection(); 
  };
  
  return (
    <>
    <div className="flex justify-center">
    <button className="text-center bg-violet-600 px-2 font-bold my-1 text-xl animate-bounce rounded-full" onClick={handleAddSection}>+</button>
    </div>
    <div className="text-center">
      <div
        id="div1"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        class="px-2 rounded"
      >
        <div className="grid grid-cols-1 gap-4">
          {droppedItems.map((item, index) => (
            <>
              <div
                key={index}
                className="flex relative rounded h-28 dark:bg-gray-800 p-2"
              >
                    <button
                      onClick={() => handleSaveEdit(index)}
                      className="absolute top-0 right-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="skyblue"
                        class="bi bi-check2-circle"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />{" "}
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />{" "}
                      </svg>
                    </button>
                    <button
                      onClick={() => onDeleteItem(index)}
                      className="absolute top-0 right-0 animate-bounce"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="red"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />{" "}
                      </svg>
                    </button>
                    {item?.content ? item?.content : item}
              </div>
            </>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default DragAndDropExample;

