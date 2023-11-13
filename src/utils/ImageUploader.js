import { useState } from "react";

export const ImageUploader = () => {
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target.result; // Use this URL to display the uploaded image
          setImageURL(imageUrl); // Update state with the image URL
          console.log('Uploaded image URL:', imageUrl);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
        <div>
        {!imageURL && (
          <>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <p>Click to upload an image</p>
          </>
        )}
        {imageURL && (
          <div>
            <p>Uploaded Image:</p>
            <img src={imageURL} alt="Uploaded" style={{ maxWidth: "100px" }} />
          </div>
        )}
      </div>
    );
  };
  