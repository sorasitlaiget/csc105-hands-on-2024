import React from "react";

const Gallery = () => (
<section id="gallery">
  <div className="p-6 text-center ">
    <div className="p-8">
    <div className="text-4xl font-bold mb-10">Gallery</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaXXBMZO_dA69dIoETfLiCyiW1Y9u-jSU0xpUeFu5-PsipM3I0h5zVLnqlrfnrlDRgb4&usqp=CAU"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/Superman-vs-Batman.jpg"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src="https://i0.wp.com/voyagecomics.com/wp-content/uploads/2020/02/knightfall.jpg?fit=1000%2C487&ssl=1"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaGRrKW5u8r4h8kxZYU3qy8I7PuKQLJ40Gw&s"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src="https://i.ytimg.com/vi/KVEmAUrctV4/mqdefault.jpg"
          className="rounded-lg shadow-md w-full h-auto"
        />
        <img
          src="https://comicbook.com/wp-content/uploads/sites/4/2022/01/ec722558-cbee-48b9-83a8-109646d269f7.jpg"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
    </div>
  </div>
  </section>
);

export default Gallery;

