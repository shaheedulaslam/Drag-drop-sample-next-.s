import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const Section1 = ({ title }) => {
  const [{ isDragging }, Section1drag] = useDrag(() => ({
    type: ItemTypes.SECTION,
    item: { title },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
    <div ref={Section1drag} className={`rounded text-center text-black ${
          isDragging ? "opacity-50" : ""
        }`}>
    <div
        className={`grid grid-cols-2 rounded space-x-1`}>
        <div className="col-span-1 bg-gray-200  py-12"></div>
        <div className="col-span-1 bg-gray-200  py-12"></div>
      </div>
      <div className="grid grid-cols-1 space-x-1 my-1 text-center text-black">
        <div className="col-span-1 bg-gray-200  py-12">
          <span>{title}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 space-x-1">
        <div className="col-span-1 bg-gray-200  py-12"></div>
        <div className="col-span-1 bg-gray-200  py-12"></div>
        <div className="col-span-1 bg-gray-200  py-12"></div>
      </div>
    </div>

    </>
  );
};

export default Section1;
