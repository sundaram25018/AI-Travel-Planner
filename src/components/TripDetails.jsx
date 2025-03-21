import React from 'react';

const TripDetails = ({ details }) => {
  if (!details) return <p>No trip details available.</p>;

  const renderDetails = () => {
    if (typeof details === 'string') {
      try {
        const parsedDetails = JSON.parse(details);
        return renderJsonDetails(parsedDetails);
      } catch (error) {
        return <p className="mt-3 text-gray-700">{details}</p>;
      }
    } else if (typeof details === 'object') {
      return renderJsonDetails(details);
    }
    return <p className="mt-3 text-gray-700">Invalid trip details format.</p>;
  };

  const renderJsonDetails = (data) => (
    <div className="mt-3 text-gray-700">
      <pre className="bg-gray-100 p-3 rounded-md whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );

  return (
    <div className="p-5 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Trip Itinerary</h2>
      {renderDetails()}
    </div>
  );
};

export default TripDetails;
