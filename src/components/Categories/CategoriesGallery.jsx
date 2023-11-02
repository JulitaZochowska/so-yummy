import React from 'react';
import css from 'pages/CategoriesPage/CategoriesPage.module.css'; // Assuming you have a CSS module file for CategoriesGallery
import pancakes from 'images/pancakes.jpg'; // Import the image with a relative path

const categoriesGallery = [
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
  {
    url: pancakes,
    altText: 'Pancakes',
  },
];

function CategoriesGalleryImage() {
  const categoriesGalleryImage = categoriesGallery.map(image => (
    <div className={css.CategoriesGallery_element} key={image.url}>
      <img src={image.url} alt={image.altText} />
      <div className={css.CategoriesGallery_name}>
        <h2 className={css.CategoriesGallery_h2}>{image.altText}</h2>
        </div>
    </div>
  ));

  return (
    <div className={css.CategoriesPage_gallery}>
      {categoriesGalleryImage}
    </div>
  );
}

export default CategoriesGalleryImage;
