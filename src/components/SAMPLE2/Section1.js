// import { useDrag } from "react-dnd";
// import { ItemTypes } from "./ItemTypes";

// const Section1 = ({ titlesec1 , subtitlesec1,ChildrenTitlesec1 }) => {
//   const [{ isDragging }, Section1drag] = useDrag(() => ({
//     type: ItemTypes.SECTION,
//     item: { titlesec1 , subtitlesec1 ,ChildrenTitlesec1},
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <>
//     <div ref={Section1drag} className={`rounded text-center text-black ${
//           isDragging ? "opacity-50" : ""
//         }`}>

//     <div
//         className={`grid grid-cols-2 rounded space-x-1`}>
//         <div className="col-span-1 bg-gray-200  py-12">{subtitlesec1}</div>
//         <div className="col-span-1 bg-gray-200  py-12">{subtitlesec1}</div>
//       </div>
//       <div className="grid grid-cols-1 space-x-1 my-1 text-center text-black">
//         <div className="col-span-1 bg-gray-200  py-12">
//           <span>{titlesec1}</span>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 space-x-1">
//         <div className="col-span-1 bg-gray-200  py-12">{ChildrenTitlesec1}</div>
//         <div className="col-span-1 bg-gray-200  py-12">{ChildrenTitlesec1}</div>
//         <div className="col-span-1 bg-gray-200  py-12">{ChildrenTitlesec1}</div>
//       </div>
//     </div>

//     </>
//   );
// };

// export default Section1;




import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const Section1 = ({ titlesec1, subtitlesec1, ChildrenTitlesec1 ,sidebar}) => {
  const [{ isDragging }, Section1drag] = useDrag(() => ({
    type: ItemTypes.SECTION,
    item: { titlesec1, subtitlesec1, ChildrenTitlesec1 ,sidebar },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="grid grid-cols-4 space-x-1">
        <div className="bg-gray-200 col-span-1 text-black flex items-center justify-center">
          {sidebar}
      </div>
      <div className="col-span-3">
      <div
        ref={Section1drag}
        className={`rounded text-center text-black ${
          isDragging ? "opacity-50" : ""
        }`}
      >
          <div className="grid grid-cols-1 mb-1 text-center text-black">
          <div className="col-span-1 bg-gray-200 py-1">
            <span>Navbar</span>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded space-x-1">
          <div className="col-span-1 bg-gray-200 py-12">{subtitlesec1}</div>
          <div className="col-span-1 bg-gray-200 py-12">{subtitlesec1}</div>
        </div>
        <div className="grid grid-cols-1 space-x-1 my-1 text-center text-black">
          <div className="col-span-1 bg-gray-200 py-12">
            <span>{titlesec1}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 space-x-1">
          <div className="col-span-1 bg-gray-200 py-12">{ChildrenTitlesec1}</div>
          <div className="col-span-1 bg-gray-200 py-12">{ChildrenTitlesec1}</div>
          <div className="col-span-1 bg-gray-200 py-12">{ChildrenTitlesec1}</div>
        </div>
      </div>

      </div>


    </div>
  );
};

export default Section1;
