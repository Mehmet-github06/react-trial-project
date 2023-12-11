import images from "./images";
import "./style.css";
import { useEffect, useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [title,setTitle] = useState(true);


useEffect(()=>{
  const timeout= setTimeout(() => {
    setTitle(false);
  },5000);
  return () => clearTimeout(timeout)
})


  return (
    <div className="App">
      <h1>Delicious Dishes</h1>
      {title && <h2> 🍔 Choose the food you like 🥩</h2>}
      
      <div className="container">
        <img src={selectedImg} alt="select" className="selected" />
      </div>
      <div className="imgContainer">
        {images.map((img, i) => (
          <img
            src={img}
            alt="tantuni"
            key={i}
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
