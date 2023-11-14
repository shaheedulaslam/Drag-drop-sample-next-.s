import { useState } from "react";

export const VideoUploader = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideoChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleVideoFileUpload = (event) => {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function () {
      try {
        var file = reader.result;

        // Your existing code for handling the file
        var match = reader.result.match(/^data:([^/]+)\/([^;]+);/) || [];
        var type = match[1];
        var format = match[2];
        if (type === "video") {
          // Send the video data to the server or handle it as needed
          socket.emit("message", `
            <video controls autoplay="1" alt="Video Uploaded" style="cursor: zoom-in; border-radius: 4px; width: 16rem" src="${file}">
          `);
        } else if (type === "image") {
          // Handle image case if needed
          socket.emit("message", `
            <img alt="Image Uploaded" style="cursor: zoom-in; border-radius: 4px; width: 16rem" src="${file}">
          `);
        }
      } catch (err) {
        console.error("Error handling file:", err);
      }
    };
    reader.readAsDataURL(input.files[0]);
  };

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={handleVideoChange}
        placeholder="Paste video URL here"
        className="border"
      />
      <input type="file" accept="video/*" onChange={handleVideoFileUpload} />
    </div>
  );
};
