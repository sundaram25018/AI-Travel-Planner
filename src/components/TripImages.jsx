import React from 'react';

const TripImages = ({ images }) => {
  if (!images || images.length === 0) return <p>No images available.</p>;
  
  return (
    <div className="p-5 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Destination Images</h2>
      <div className="grid grid-cols-2 gap-4 mt-3">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Location" className="rounded-lg w-full h-40 object-cover" />
        ))}
      </div>
    </div>
  );
};

export default TripImages;