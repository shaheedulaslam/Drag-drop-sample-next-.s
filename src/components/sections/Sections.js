import React from "react";

export function Section1({ onDrop, children, onDeleteItem }) {
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e);
  };
  return (
    <>
      {children?.map((item, index) => (
        <>
          <div
            className="grid grid-cols-1 bg-white p-3 w-full"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
                Section 1/4
                </p>
                  <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export function Section2({ onDrop, children, onDeleteItem }) {
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e);
  };
  return (
    <>
      <div
        className="grid grid-cols-2 bg-white my-1 p-3 space-x-1"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
      
          {children?.map((item, index) => (
            <>
              <div className="col-span-1 bg-black">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
              Section 2/4
              </p>
              <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}

          {children?.map((item, index) => (
            <>
      <div className="col-span-1 bg-black">
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 2/4
          </p>
              <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export function Section3({ onDrop, children, onDeleteItem }) {
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e);
  };
  return (
    <>
      <div
        className="grid grid-cols-3 bg-white p-3 space-x-1"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >

          {children?.map((item, index) => (
            <>
      <div className="col-span-1 bg-black">
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 3/4
          </p>
        <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
          {children?.map((item, index) => (
            <>
        <div className="col-span-1 bg-black">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 3/4
          </p>           
             <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
          {children?.map((item, index) => (
            <>
     <div className="col-span-1 bg-black">
     <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 3/4
          </p>           
           <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export function Section4({ onDrop, children, onDeleteItem }) {
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e);
  };
  return (
    <>
      <div
        className="grid grid-cols-4 bg-white p-3 space-x-1"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >

          {children?.map((item, index) => (
            <>
       <div className="col-span-1 bg-black">
       <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 4/4
          </p>          
              <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
          {children?.map((item, index) => (
            <>
          <div className="col-span-1 bg-black">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 4/4
          </p>           
           <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}

          {children?.map((item, index) => (
            <>
       <div className="col-span-1 bg-black">
       <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 4/4
          </p>          
              <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
          {children?.map((item, index) => (
            <>
         <div className="col-span-1 bg-black">
         <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Section 4/4
          </p>             
           <div
                key={index}
                id={item?.sectionId}
                className="flex relative rounded h-72 dark:bg-gray-800 p-2"
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
                {item?.content?.map((item, index) => (
                  <div id="content" key={index} draggable>
                    {item?.content}
                  </div>
                ))}
              </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
