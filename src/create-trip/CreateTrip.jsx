// import React, { useEffect, useState } from 'react';
// import AsyncSelect from "react-select/async"; // Import async select
// import axios from "axios";
// import { Input } from '@/components/ui/input';
// import { SelectBudget } from '@/constant/options';
// import { SelectTravelsList } from '@/constant/options';
// import { Button } from '@/components/ui/button';



// const CreateTrip = () => {

//   const[formData, setformData] = useState([]);

//   const handleChange = (name,value)=>{
//     setformData({
//       ...formData,
//       [name]:value
//   })
//   }
//   useEffect(()=>{
//     console.log(formData)

//   },[formData])
//   // Fetch locations from Nominatim API
//   const fetchLocations = async (inputValue) => {
//     if (!inputValue) return [];
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
//       );

//       return response.data.map((place) => ({
//         label: place.display_name, // Name of the place
//         value: {
//           name: place.display_name, 
//           lat: place.lat, 
//           lon: place.lon, 
//           type: place.type
//         } // Storing more details in value
//       }));
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//       return [];
//     }
//   };

//   // Handle selection
//   const handleSelect = (selectedOption) => {
//     console.log("Selected Location:", selectedOption.value);
//   };

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell us your preferred destination</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences.
//       </p>
//       <div className='mt-10 flex flex-col gap-10'>
//         <div>
//           <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
//           <AsyncSelect
//             loadOptions={fetchLocations} // Fetch locations dynamically
//             placeholder="Search location..."
//             defaultOptions // Show some results before typing
//             onChange={handleSelect} // Log selected location details
//           />
//         </div>
//         <div>
//         <h2 className='text-xl my-3 font-medium'>How many days you are planning for trips?</h2>
//       <Input placeholder={'ex-3'} type="number" onChange={handleChange('noofdays',e.target.value)}/>
//       </div>
//       </div>
//       <div>
//       <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
//       <div className='grid grid-cols-3 gap-5 mt-5'>
//         {SelectBudget.map((item,index)=>(
//           <div key = {index} onChange={handleChange('budgets',item.title)} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg '>
//           <h2 className='text-4xl'>{item.icon}</h2>
//           <h2 className='font-bold text-lg'>{item.title}</h2>
//           <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//           </div>

//         ))}
//       </div>
//       </div>

//       <div>
//       <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with</h2>
//       <div className='grid grid-cols-3 gap-5 mt-5'>
//         {SelectTravelsList.map((item,index)=>(
//           <div key = {index} onChange={handleChange('travlers',item.people)} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg '>
//           <h2 className='text-4xl'>{item.icon}</h2>
//           <h2 className='font-bold text-lg'>{item.title}</h2>
//           <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//           </div>

//         ))}
//       </div>
//       </div>
//       <div className='my-10 justify-end flex'>
//       <Button>Generate Trip</Button>
//       </div>
//     </div>
    
//   );
// };

// export default CreateTrip;




// import React, { useEffect, useState } from 'react';
// import AsyncSelect from "react-select/async"; // Import async select
// import axios from "axios";
// import { Input } from '@/components/ui/input';
// import { AI_prompt, SelectBudget, SelectTravelsList } from '@/constant/options';
// import { Button } from '@/components/ui/button';
// import { toast } from "sonner"
// import { chatSession } from '@/service/AiModel';


// const CreateTrip = () => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   const GenerateTrip=async()=>{
//     if(formData?.noofdays > 5 && !formData?.destination|| !formData?.budget || !formData?.noofdays || !formData?.travellers){
//       toast("Please Enter All Detail first")
//       return;
//     }
//       const Final_Promt = AI_prompt
//       .replace('{location}',formData?.destination?.name)
//       .replace('{totalDays}',formData?.noofdays)
//       .replace('{traveler}',formData?.travellers)
//       .replace('{budget}',formData?.budget)
//       .replace('{totalDays}',formData?.noofdays)
       
//       console.log(Final_Promt)
      
//         const result = await chatSession.sendMessage(Final_Promt);
//         console.log("Raw Response from AI Model:", result?.response?.text());
    
//   }

//   // Fetch locations from Nominatim API
//   const fetchLocations = async (inputValue) => {
//     if (!inputValue) return [];
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
//       );

//       return response.data.map((place) => ({
//         label: place.display_name,
//         value: {
//           name: place.display_name,
//           lat: place.lat,
//           lon: place.lon,
//           type: place.type
//         }
//       }));
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//       return [];
//     }
//   };

//   // Handle selection
//   const handleSelect = (selectedOption) => {
//     console.log("Selected Location:", selectedOption.value);
//     setFormData((prev) => ({ ...prev, destination: selectedOption.value }));
//   };

//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//       <h2 className='font-bold text-3xl'>Tell us your preferred destination</h2>
//       <p className='mt-3 text-gray-500 text-xl'>
//         Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences.
//       </p>
//       <div className='mt-10 flex flex-col gap-10'>
        
//         {/* Destination Selection */}
//         <div>
//           <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
//           <AsyncSelect
//             loadOptions={fetchLocations}
//             placeholder="Search location..."
//             defaultOptions
//             onChange={handleSelect}
//           />
//         </div>

//         {/* Number of Days */}
//         <div>
//           <h2 className='text-xl my-3 font-medium'>How many days are you planning for trips?</h2>
//           <Input 
//             placeholder="ex-3" 
//             type="number" 
//             onChange={(e) => handleChange('noofdays', e.target.value)} 
//           />
//         </div>
//       </div>

//       {/* Budget Selection */}
//       <div>
//         <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
//         <div className='grid grid-cols-3 gap-5 mt-5'>
//           {SelectBudget.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleChange('budget', item.title)} 
//               className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget == item.title&&'shadow-lg border-black'}`}
//             >
//               <h2 className='text-4xl'>{item.icon}</h2>
//               <h2 className='font-bold text-lg'>{item.title}</h2>
//               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Travelers Selection */}
//       <div>
//         <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with?</h2>
//         <div className='grid grid-cols-3 gap-5 mt-5'>
//           {SelectTravelsList.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleChange('travellers', item.people)} 
//               className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.travellers == item.people&&'shadow-lg border-black'}`}
//             >
//               <h2 className='text-4xl'>{item.icon}</h2>
//               <h2 className='font-bold text-lg'>{item.title}</h2>
//               <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Generate Trip Button */}
//       <div className='my-10 justify-end flex'>
//         <Button onClick={GenerateTrip}>Generate Trip</Button>
//       </div>
//     </div>
//   );
// };

// export default CreateTrip;





import React, { useEffect, useState } from 'react';
import AsyncSelect from "react-select/async";
import axios from "axios";
import { Input } from '@/components/ui/input';
import { AI_prompt, SelectBudget, SelectTravelsList } from '@/constant/options';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { chatSession } from '@/service/AiModel';

import TripLocation from '@/components/TripLocation';
import TripImages from '@/components/TripImages';
import TripSummary from '@/components/TripSummary';
import TripDetails from '@/components/TripDetails';

const CreateTrip = () => {
  const [tripData, setTripData] = useState(null);
  const [formData, setFormData] = useState({
    destination: null,
    noofdays: '',
    budget: '',
    travellers: ''
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const GenerateTrip = async () => {
    if (!formData.destination || !formData.noofdays || !formData.budget || !formData.travellers) {
      toast("Please enter all details");
      return;
    }

    const Final_Prompt = AI_prompt
      .replace('{location}', formData.destination.name)
      .replace('{totalDays}', formData.noofdays)
      .replace('{traveler}', formData.travellers)
      .replace('{budget}', formData.budget);

    console.log(Final_Prompt);

    const result = await chatSession.sendMessage(Final_Prompt);
    setTripData(result.response.text());
  };

  const fetchLocations = async (inputValue) => {
    if (!inputValue) return [];
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
      );
      return response.data.map((place) => ({
        label: place.display_name,
        value: {
          name: place.display_name,
          lat: place.lat,
          lon: place.lon,
          type: place.type
        }
      }));
    } catch (error) {
      console.error("Error fetching locations:", error);
      return [];
    }
  };

  return (
    <div className='p-10'>
      <h2 className='text-3xl font-bold'>Plan Your Trip</h2>
      <div className='mt-5'>
        <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
        <AsyncSelect loadOptions={fetchLocations} placeholder="Search location..." defaultOptions onChange={(selected) => handleChange('destination', selected.value)} />

        <h2 className='text-xl my-3 font-medium'>How many days are you planning for trips?</h2>
        <Input placeholder="ex-3" type="number" onChange={(e) => handleChange('noofdays', e.target.value)} />

        <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudget.map((item, index) => (
            <div key={index} onClick={() => handleChange('budget', item.title)} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget === item.title && 'shadow-lg border-black'}`}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>

        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item, index) => (
            <div key={index} onClick={() => handleChange('travellers', item.people)} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.travellers === item.people && 'shadow-lg border-black'}`}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className='my-10 justify-end flex'>
        <Button onClick={GenerateTrip}>Generate Trip</Button>
      </div>
      {tripData && (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <TripDetails details={tripData} />
          <TripLocation location={formData.destination} />
          <TripImages images={["/image1.jpg", "/image2.jpg"]} />
          <TripSummary budget={formData.budget} days={formData.noofdays} travelers={formData.travellers} />
        </div>
      )}
    </div>
  );
};

export default CreateTrip;
