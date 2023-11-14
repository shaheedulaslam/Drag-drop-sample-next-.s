import { useState } from "react";

export const ParagraphInput = () => {
    const [text, setText] = useState('');
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <textarea value={text} rows={4} onChange={handleTextChange} placeholder="Write your paragraph here" className="border-2"/>
      </div>
    );
  };
  