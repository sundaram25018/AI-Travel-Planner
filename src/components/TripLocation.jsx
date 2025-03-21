import React from 'react';

const TripLocation = ({ location }) => {
  if (!location) return <p>No location selected.</p>;
  
  return (
    <div className="p-5 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Location</h2>
      <p className="mt-2 text-gray-700">{location.name}</p>
      <iframe
        src={`https://www.google.com/maps?q=${location.lat},${location.lon}&output=embed`}
        width="100%"
        height="300"
        className="mt-3 border rounded-lg"
      ></iframe>
    </div>
  );
};

export default TripLocation;