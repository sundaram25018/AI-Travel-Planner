# React + Vite

# AI Travel Planner

AI Travel Planner is an AI-powered travel assistant that helps users create personalized travel itineraries based on their preferences, budget, and interests. It integrates real-time travel data to suggest destinations, accommodations, and activities.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- AI-driven travel itinerary generation
- Customizable plans based on budget and interests
- Integration with travel APIs for real-time recommendations
- Interactive UI for easy trip customization
- Saves and manages multiple trip plans
- Multi-language support

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **AI/ML:** OpenAI GPT, Python (Flask for AI processing)
- **Database:** MongoDB

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ai-travel-planner.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ai-travel-planner
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

## Usage
1. Start the backend server:
   ```sh
   cd server
   npm start
   ```
2. Start the frontend application:
   ```sh
   cd client
   npm start
   ```
3. Open the application in your browser at `http://localhost:3000`

## API Endpoints
- `POST /api/generate-itinerary` - Generates a travel itinerary based on user preferences
- `GET /api/destinations` - Fetches recommended destinations
- `POST /api/save-trip` - Saves a user’s travel plan

## Screenshots
![image](https://github.com/user-attachments/assets/3ff6e05a-df2f-4b80-b948-49b787db2050)
![image](https://github.com/user-attachments/assets/8d8c69cc-d45c-4b9a-8eaa-0a5916d8f2ff)


## Future Enhancements
- Integration with flight and hotel booking APIs
- Offline itinerary access
- Social media sharing of travel plans
- AI-powered chatbot for travel assistance

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit your changes and push to the branch.
4. Submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any queries, contact us at [your-email@example.com](mailto:your-email@example.com).


