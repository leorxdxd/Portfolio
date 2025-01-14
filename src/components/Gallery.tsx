import React, { useState } from "react";
import "../assets/styles/Gallery.scss";

const galleryImages = [
  { id: 1, src: require("../assets/images/roel.png"), alt: "Image 1" },
  { id: 2, src: require("../assets/images/roel.png"), alt: "Image 2" },
  { id: 3, src: require("../assets/images/roel.png"), alt: "Image 3" },
  { id: 4, src: require("../assets/images/roel.png"), alt: "Image 4" },
  { id: 5, src: require("../assets/images/roel.png"), alt: "Image 5" },
  { id: 6, src: require("../assets/images/roel.png"), alt: "Image 6" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={image.alt} className="gallery-thumbnail" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;