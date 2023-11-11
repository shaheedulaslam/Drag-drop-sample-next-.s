// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import DragDrop from '@/components/DragDrop'
// import DragAndDropExample from '@/components/DragDrop1'


// export default function Home() {
//   return (
//     <>
//     <div className='flex-col justify-center'>
//       <h1 className='text-3xl text-center'>Hello Guys,</h1>
//       <p className='text-center'>this is an sample project for Drag and drop here is that...</p>
//         <DragDrop />
//     </div>
//     </>

//   )
// }


import DropZone from '@/components/DropZone';
import Section from '@/components/Section';
import Section1 from '@/components/Section1';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const Home = () => {
  const [droppedSections, setDroppedSections] = useState([]);

  const handleDrop = (section) => {
    setDroppedSections((prev) => [...prev, section]);
  };

  const handleAddContent = (index, content) => {
    const updatedSections = [...droppedSections];
    updatedSections[index].content = content;
    setDroppedSections(updatedSections);
  };

  const handleDeleteSection = (index) => {
    const updatedSections = droppedSections.filter((_, i) => i !== index);
    setDroppedSections(updatedSections);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 m-2 bg-gray-300 rounded grid grid-cols-2 space-x-2">
        <div className='col-span-1'>
        <Section title="Section 1" />
        </div>
        <div className='col-span-1'>
        <Section1 title="Section 2" />
        </div>
      </div>
      <DropZone droppedSections={droppedSections} onDrop={handleDrop} onAddContent={handleAddContent} onDeleteSection={handleDeleteSection}/>
    </DndProvider>
  );
};

export default Home;
