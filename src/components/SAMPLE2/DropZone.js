import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const DropZone = ({
  droppedSections,
  onDrop,
  onAddContent,
  onDeleteSection,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SECTION,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleAddContent = (index, content) => {
    onAddContent(index, content);
  };

  return (
    <div
      ref={drop}
      className={`p-8 m-2 border-2 border-dashed border-gray-400 rounded ${
        isOver ? "bg-gray-100" : ""
      }`}
    >
       {droppedSections.length === 0 ?    
         <div className="flex items-center justify-center">
            <span className="text-center">+</span>
          </div>:''
          }
      {droppedSections.map((section, index) => (
        <><div key={index} className="mb-4 relative">
          <h3 className="mb-2">{section?.title || section?.titlesec1}</h3>
          <textarea
            rows="4"
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Add content..."
            onChange={(e) => handleAddContent(index, e.target.value)} />
          <button
            onClick={() => onDeleteSection(index)}
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
        </div>
          </>
      ))}
    </div>
  );
};

export default DropZone;
