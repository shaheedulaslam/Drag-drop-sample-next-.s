import { useState } from "react";

 export const TextEditor = () => {
    const [text, setText] = useState('');
    const [isBold, setIsBold] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isCapital, setIsCapital] = useState(false);
    const [selectedColor, setSelectedColor] = useState('white');
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    const toggleBold = () => {
      setIsBold(!isBold);
    };
  
    const toggleUnderline = () => {
      setIsUnderline(!isUnderline);
    };
  
    const toggleCapital = () => {
      setIsCapital(!isCapital);
    };
  
    const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
    };
  
    const textStyle = {
      fontWeight: isBold ? 'bold' : 'normal',
      textDecoration: isUnderline ? 'underline' : 'none',
      textTransform: isCapital ? 'uppercase' : 'none',
      color: selectedColor,
    };
  
    return (
      <div>
        <div className="space-x-1">
          <button onClick={toggleBold}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16"> <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/> </svg>
            </button>
          <button onClick={toggleUnderline}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16"> <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/> </svg>
          </button>
          <button onClick={toggleCapital}>
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00915 6.68569 8.00915 8.60972C8.00915 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.53C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 9.79823V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.7719 10.4952 13.1543 9.79823Z" fill="currentColor" /> </svg>
          </button>
          <input type="color" value={selectedColor} onChange={handleColorChange} />
        </div>

        <textarea value={text} onChange={handleTextChange} className="text-black"/>
        <p style={textStyle}>{text}</p>
      </div>
    );
  };
  


  export const HeadingEditor = () => {
    const [headingText, setHeadingText] = useState('');
    const [headingSize, setHeadingSize] = useState('24px');
    const [headingColor, setHeadingColor] = useState('black');
    const [isUnderline, setIsUnderline] = useState(false);
  
    const handleTextChange = (event) => {
      setHeadingText(event.target.value);
    };
  
    const handleSizeChange = (event) => {
      setHeadingSize(event.target.value);
    };
  
    const handleColorChange = (event) => {
      setHeadingColor(event.target.value);
    };
  
    const toggleUnderline = () => {
      setIsUnderline(!isUnderline);
    };
  
    const headingStyle = {
      fontSize: `${headingSize}px`,
      color: headingColor,
      textDecoration: isUnderline ? 'underline' : 'none',
    };
  
    return (
        <>
         <div className="flex-col">
        <div className="space-x-2">
        <input type="range" min="16" max="97" value={headingSize} onChange={handleSizeChange} />
        <input type="color" value={headingColor} onChange={handleColorChange} />
        <button onClick={toggleUnderline}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16"> <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/> </svg>
          </button>  
        </div>
        <div>
                <input type="text" value={headingText} onChange={handleTextChange} placeholder="Heading Text" className="text-black" />
                <h1 style={headingStyle}>{headingText}</h1>
            </div>
            </div>

            </>
    );
  };
  