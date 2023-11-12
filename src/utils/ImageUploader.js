export const ImageUploader = () => {
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target.result; // Use this URL to display the uploaded image
          // Process the uploaded image, display a preview, or perform further actions with the image URL
          console.log('Uploaded image URL:', imageUrl);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <p>Click to upload an image</p>
      </div>
    );
  };
  