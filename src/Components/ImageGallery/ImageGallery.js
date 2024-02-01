import React from "react";
import Gallery from "react-image-gallery";

// Importing styles for the image gallery
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

// Functional component for the Image Gallery
const ImageGallery = (props) => {
  // Mapping through the provided images to format them for the Gallery component
  const imageList = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  // Rendering the Image Gallery using the react-image-gallery component
  return (
    <div>
      <Gallery items={imageList} />
    </div>
  );
};

// Exporting the ImageGallery component
export default ImageGallery;
