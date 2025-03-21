export const SelectTravelsList=[
 
  {
    id:1,
    title:'Single',
    desc:'A solo travels in exploration',
    icon:'✈',
    people:'1 people'
  },
  {
    id:2,
    title:'Couple',
    desc:'A together tralvers',
    icon:'👩‍❤️‍👨',
    people:'2 people'
  },
  {
    id:3,
    title:'family',
    desc:'A familiy man',
    icon:'🏡',
    people:'4 people'
  },
  {
    id:4,
    title:'friend',
    desc:'Travels with friends',
    icon:'🫂',
    people:'6 people'
  }
];


export const SelectBudget =[
  {
  id:1,
  title:'Cheap',
  desc:'Stay conscios of cost',
  icon:'💰'
  },
  {
    id:2,
    title:'Moderate',
    desc:'Stay within a limit',
    icon:'💸'
    },
    {
      id:3,
      title:'Luxury',
      desc:'Cost are no more',
      icon:'💸🤑💰'
      }

]
export const AI_prompt = "Generate Travel Plan for Location: {location} for {totalDays} days for {traveler}  with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."