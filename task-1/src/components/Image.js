import React, { useState } from "react";

const Image = () => {
  const [image, setImage] = useState({
    src: "bremen.jpg",
    width: 600,
  });

  const increaseSize = () => {
    setImage((prev) => ({ ...prev, width: prev.width * 1.1 }));
  };

  const decreaseSize = () => {
    setImage((prev) => ({ ...prev, width: prev.width * 0.9 }));
  };

  const removeImage = () => {
    setImage(null);
  };

  const addImage = () => {
    if (!image) {
      setImage({ src: "bremen.jpg", width: 600 });
    }
  };

  return (
    <div id="imageContainer">
      {image && <img src={image.src} alt="Бремен" width={image.width} />}
      <div className="buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
      <p>Детальніше про Бремен можна дізнатися на <a href="https://www.bremen.eu/">офіційному сайті міста</a>.</p>
    </div>
  );
};

export default Image;
