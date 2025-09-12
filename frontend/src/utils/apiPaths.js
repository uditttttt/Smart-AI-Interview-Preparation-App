// // Check if the app is running in the development environment
// const isDevelopment = process.env.NODE_ENV === 'development';

// // Set the base URL based on the environment
// // NOTE: Assumes your local backend runs on port 5000, as defined in your server.js
// export const BASE_URL = isDevelopment
//   ? "http://localhost:8000"
//   : "https://smart-ai-interview-preparation-app.onrender.com";

// // The rest of your API paths remain the same
// export const API_PATHS = {
//   AUTH: {
//     REGISTER: "/api/auth/register",
//     LOGIN: "/api/auth/login",
//     GET_PROFILE: "/api/auth/profile",
//   },
//   IMAGE: {
//     UPLOAD_IMAGE: "/api/auth/upload-image",
//   },
//   AI: {
//     GENERATE_QUESTIONS: "/api/ai/generate-questions",
//     GENERATE_EXPLANATION: "/api/ai/generate-explanation",
//   },
//   SESSION: {
//     CREATE: "/api/sessions/create",
//     GET_ALL: "/api/sessions/my-sessions",
//     GET_ONE: (id) => `/api/sessions/${id}`,
//     DELETE: (id) => `/api/sessions/${id}`,
//   },
//   QUESTION: {
//     ADD_TO_SESSION: "/api/questions/add",
//     PIN: (id) => `/api/questions/${id}/pin`,
//     UPDATE_NOTE: (id) => `/api/questions/${id}/note`,
//   },
// };

// Get the base URL from the environment variables provided by Vite.
// VITE_API_URL is the variable you will set in Render (for production)
// and in a .env file (for local development).
export const BASE_URL = import.meta.env.VITE_API_URL;

// All your API paths will now correctly build off the BASE_URL.
export const API_PATHS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    GET_PROFILE: "/auth/profile",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/auth/upload-image",
  },
  AI: {
    GENERATE_QUESTIONS: "/ai/generate-questions",
    GENERATE_EXPLANATION: "/ai/generate-explanation",
  },
  SESSION: {
    CREATE: "/sessions/create",
    GET_ALL: "/sessions/my-sessions",
    GET_ONE: (id) => `/sessions/${id}`,
    DELETE: (id) => `/sessions/${id}`,
  },
  QUESTION: {
    ADD_TO_SESSION: "/questions/add",
    PIN: (id) => `/questions/${id}/pin`,
    UPDATE_NOTE: (id) => `/questions/${id}/note`,
  },
};