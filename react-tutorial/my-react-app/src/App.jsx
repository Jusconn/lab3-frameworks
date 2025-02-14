import React, { useState } from "react";
import "./App.css";

function App() {
  const [images,setImages] = useState([]);
  const [imageURL,setImageUrl] = useState([]);

  const handleAddImage = () => {
    if(imageURL !== ""){
      setImages((prevImages) => [...prevImages,imageURL])
    }
  }

  const handleRemoveImage = (url) => {
      setImages((prevImages) => prevImages.filter(item => item !== url))
    }

  return (
    <div className="App">
      <header>
        <h1>Mood Board</h1>
        <div>
        <input
          type="text"
          placeholder="Enter an image url"
          value={imageURL}
          onChange={(e) => setImageUrl(e.target.value)}
      />
     <button onClick={handleAddImage}>Add Image</button>

        </div>
        <div>
        {images.map((img, index) => (<div key={index} className="imageStore">
          <img src={img} />
          <button onClick={() => handleRemoveImage(img)}>Remove</button>
        </div>
))}
        </div>
      </header>
    </div>
  );
}

export default App;
