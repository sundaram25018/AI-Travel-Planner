import React from 'react';

const TripSummary = ({ budget, days, travelers }) => {
  return (
    <div className="p-5 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Trip Summary</h2>
      <p className="mt-2"><strong>Days:</strong> {days}</p>
      <p><strong>Budget:</strong> {budget}</p>
      <p><strong>Travelers:</strong> {travelers}</p>
    </div>
  );
};

export default TripSummary;