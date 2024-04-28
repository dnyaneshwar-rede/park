import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="px-10 py-20">
      <div class="title-text">
        <p>GALLERY</p>
        <h1>Some Parking Spots</h1>
      </div>
      <div class="gallery-box">
        <div class="single-gallery">
          <img src="/assets/images/pic-2.jpg" />
          <div class="overlay"></div>
        </div>
        <div class="single-gallery">
          <img src="/assets/images/pic-3.jpg" />
          <div class="overlay"></div>
        </div>
        <div class="single-gallery">
          <img src="/assets/images/pic-4.jpg" />
          <div class="overlay"></div>
        </div>
        <div class="single-gallery">
          <img src="/assets/images/pic-5.jpg" />
          <div class="overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
