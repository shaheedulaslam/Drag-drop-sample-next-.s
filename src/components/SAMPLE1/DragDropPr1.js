import React, { useEffect, useRef, useState } from "react";
import DragAndDropExample from "./DragDrop1Pr2";
import { ParagraphInput } from "@/utils/ParagraphInput";
import { VideoUploader } from "@/utils/VideoUploader";
import { HeadingEditor, TextEditor } from "@/utils/TextEditor";
import { ImageUploader } from "@/utils/ImageUploader";

const button = [
  {id:0, name:'Achievement ID',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:1, name:'Ad format',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:2, name:'Ad source',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:3, name:'Ad unit',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:4, name:'App version	',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:5, name:'Audience name',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:6, name:'Audience resource name',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:7, name:'Interests',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:8, name:'Browser',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:9, name:'Campaign ID',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:10, name:'Campaign',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:11, name:'City',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:12, name:'Cohort',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:13, name:'Daily cohort',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:14, name:'Monthly cohort',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:15, name:'Weekly cohort',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:16, name:'Content group	',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:17, name:'Content ID	',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:18, name:'Content type	',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:19, name:'Continent',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:20, name:'Continent ID',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:21, name:'Country',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:22, name:'Country  ID',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:23, name:'Currency',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  {id:24, name:'Date',icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/512px-GAnalytics.svg.png",path:"" ,bgcolor:""},
  
]

export default function DragDrop() {
  const dragOverItem = useRef();
  const [section, setSection ] = useState([])
  const [editedText, setEditedText] = useState("");



  const handleDragStart = (e, index) => {
    dragOverItem.current = index;
    e.dataTransfer.setData("text/plain", index);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.target.style.cursor = "grab";
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


  // const handleDrop = (index , SectionId) => {
  //   const content = components[index];
  //   setSection((prevSections) => {
  //       return prevSections.map((item) => {
  //           if (item?.sectionId === SectionId) {
  //               const updatedContent = item.content ? [...item.content, content] : [content];
  //               return { ...item, content: updatedContent };
  //           } else {
  //               return item;
  //           }
  //       });
  //   });
  // };

  const handleDrop = (index, SectionId) => {
    const content = components[index];
    setSection((prevSections) => {
        return prevSections.map((item) => {
            if (item?.sectionId === SectionId) {
              console.log({...item ,content},"itemm");
                return { ...item, content };
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

  const handleAddSection = (value) => {
    const newSection = []
    for(let i=0; i < value;i++){
      newSection.push({
        sectionId:"section-"+ i , content:[]
      })
    }
    setSection(newSection)
     console.log(newSection,"sdfhgsdhkfg");
  };



  return (
    <>
<div className="grid grid-cols-4 text-black h-[100vh]">
        <div className="p-3 col-span-3 bg-slate-300">
        <DragAndDropExample
        onDrop={handleDrop}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onAddSection={handleAddSection}
        section={section}
      />
        </div>
        <div className="col-span-1 bg-slate-100 overflow-y-auto">
  <p className="text-center text-4xl">Elementors</p>
  <div className="flex justify-center space-x-5 bg-white p-3">
<button className="px-3 py-1 text-sm rounded font-extrabold hover:bg-slate-50 duration-200 focus:ring focus:ring-black border">#</button>
<button className="px-2 py-1 text-xs  rounded font-extrabold hover:bg-slate-50 duration-200 focus:ring focus:ring-black border">
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="black" class="bi bi-graph-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/> </svg>
</button>
<button className="px-2 py-1 text-xs rounded font-extrabold hover:bg-slate-50 duration-200 focus:ring focus:ring-black border">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16"> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/> </svg>
</button>
</div>
        <div className="grid grid-cols-1 -space-x-1">
          {button.map((item) => (
            <button
              key={item.id}
              onDragStart={(e) => handleDragStart(e, item.id)}
              onDragEnd={(e) => dragEnter(e, item.id)}
              draggable
              className="m-1 p-3 bg-white cursor-grab gap-2 font-semibold text-base"
            >
              <div className="grid grid-cols-4">
                <div className="col-span-3 flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="lightgray" className="w-5 h-5" viewBox="0 0 24 24"><path d="M8.5,10a2,2,0,1,0,2,2A2,2,0,0,0,8.5,10Zm0,7a2,2,0,1,0,2,2A2,2,0,0,0,8.5,17Zm7-10a2,2,0,1,0-2-2A2,2,0,0,0,15.5,7Zm-7-4a2,2,0,1,0,2,2A2,2,0,0,0,8.5,3Zm7,14a2,2,0,1,0,2,2A2,2,0,0,0,15.5,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,15.5,10Z"/></svg>
                <img src={item.icon} className="w-5 h-5"/>
               <p>{item.name}</p> 
                </div>
                <div className="col-span-1 space-x-2">
                <span className="px-2 py-[2px] text-xs bg-slate-100 rounded font-normal">Traffic</span>
                <span className="px-2 py-[2px] text-xs bg-slate-100 rounded font-extrabold">#</span>

                </div>
              </div>
              </button>
          ))}
        </div>
  </div>
      </div>




    </>
  );
}




