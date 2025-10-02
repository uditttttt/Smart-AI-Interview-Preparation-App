# Smart AI Interview Preparation App 🤖✨

A full-stack MERN application that leverages the Google Gemini API to generate personalized technical interview sessions. Users can specify their target role, experience level, and topics of focus to receive a custom-tailored set of questions and answers, creating a powerful and dynamic learning experience.



## Features

* **AI-Powered Sessions:** Generate interview questions and answers tailored to a specific job role, experience level, and technical topics.
* **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
* **Interactive Q&A:** An accordion-style interface to expand and collapse answers.
* **In-Depth Explanations:** A "Learn More" feature that uses a secondary AI call to provide detailed explanations of complex concepts.
* **Session Management:** A central dashboard to view, access, and delete all past interview sessions.
* **Dynamic Content:** "Load More" functionality to add additional questions to an existing session.
* **User Customization:** Pin important questions to the top and add personal notes.
* **Profile Management:** Users can sign up with a profile picture.

---
## Tech Stack

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E77F0?style=for-the-badge&logo=google&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---
## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* **Node.js** (v18 or later)
* **MongoDB** (either a local installation or a cloud-based instance like MongoDB Atlas)
* **Google Gemini API Key**: Get one from [Google AI Studio](https://ai.google.dev/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/uditttttt/Smart-AI-Interview-Preparation-App.git
    ```

2.  **Backend Setup:**
    * Navigate to the backend directory:
        ```bash
        cd backend
        ```
    * Install the dependencies:
        ```bash
        npm install
        ```
    * Create a `.env` file in the `backend` directory and add the following variables:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        GEMINI_API_KEY=your_google_gemini_api_key
        PORT=8000
        ```
    * Start the backend server:
        ```bash
        npm run dev
        ```
        The server should be running on `http://localhost:8000`.

3.  **Frontend Setup:**
    * Open a new terminal and navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    * Install the dependencies:
        ```bash
        npm install
        ```
    * Start the frontend development server:
        ```bash
        npm run dev
        ```
        The application should be running on `http://localhost:5173`.

---
