import DragDrop from '@/components/SAMPLE1/DragDropPr1'

export default function Home() {
  return (
    <>
    <div className='flex-col justify-center'>
      <h1 className='text-3xl text-center'>Hello Guys,</h1>
      <p className='text-center'>this is an sample project for Drag and drop here is that...</p>
        <DragDrop />
    </div>
    </>
  )
}



// import DropZone from '@/components/SAMPLE2/DropZone';
// import Section from '@/components/SAMPLE2/Section';
// import Section1 from '@/components/SAMPLE2/Section1';
// import { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';


// const Home = () => {
//   const [droppedSections, setDroppedSections] = useState([]);
//   const [title , setTitle] = useState('')
//   const [subtitle, setSubtitle] = useState('')
//   const [titlesec1, setTitlesec1] = useState('')


//   const handleDrop = (section) => {
//     setDroppedSections((prev) => [...prev, section]);
//     console.log(section,"seccc");
//   };

//   const handleAddContent = (index, content ,type) => {
//     const updatedSections = [...droppedSections];
//     if (type === 'title') {
//       updatedSections[index].title = content;
//     } else if (type === 'subtitle') {
//       updatedSections[index].subtitle = content;
//     } else if (type === 'titlesec1') {
//       updatedSections[index].titlesec1 = content;
//     }

//     setTitle(updatedSections[index].title)
//     setSubtitle(updatedSections[index].subtitle)
//     setTitlesec1(updatedSections[index].titlesec1)
//     setDroppedSections(updatedSections);
//   };

//   const handleDeleteSection = (index) => {
//     const updatedSections = droppedSections.filter((_, i) => i !== index);
//     setDroppedSections(updatedSections);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="p-4 m-2 bg-gray-400 rounded grid grid-cols-2 space-x-2">
//         <div className='col-span-1'>
//           <h1 className='text-center text-black text-2xl'>Section 1</h1>
//         <Section title="Section 1" subtitle="1/2" childrentitle="1/3"/>
//         </div>
//         <div className='col-span-1'>
//         <h1 className='text-center text-black text-2xl'>Section 2</h1>
//         <Section1 titlesec1="Section 2" ChildrenTitlesec1="1/3" subtitlesec1="1/2" sidebar="sidebar"/>
//         </div>
//       </div>
//       <DropZone droppedSections={droppedSections} onDrop={handleDrop} onAddContent={handleAddContent} onDeleteSection={handleDeleteSection}/>
//     </DndProvider>
//   );
// };

// export default Home;
