import { useState } from "react";

export const VideoUploader = () => {
    const [videoUrl, setVideoUrl] = useState('');
  
    const handleVideoChange = (event) => {
      setVideoUrl(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          value={videoUrl}
          onChange={handleVideoChange}
          placeholder="Paste video URL here"
          className="text-black"
        />
        {/* Alternatively, you can use an input of type "file" to upload a video file */}
        {/* <input type="file" accept="video/*" onChange={handleVideoFileUpload} /> */}
      </div>
    );
  };
  