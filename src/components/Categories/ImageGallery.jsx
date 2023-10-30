import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use Axios for API requests
import css from 'pages/CategoriesPage/CategoriesPage.module.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from your API and update the state
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        setImages(response.data); // Assuming your API returns an array of image data
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className={css.Categories_gallery}>
      {images.map((image, index) => (
        <div key={index} className={css.Categories_gallery_element}>
          <img src={image.url} alt={image.altText} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
