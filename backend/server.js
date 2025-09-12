// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes");
// const sessionRoutes = require("./routes/sessionRoutes");
// const questionRoutes = require("./routes/questionRoutes");
// const { protect } = require("./middlewares/authMiddleware");
// const { generateInterviewQuestions, generateConceptExplanation } = require("./controllers/aiController");

// const app = express();

// // --- START: DYNAMIC CORS CONFIGURATION ---

// // 1. Define your whitelist of allowed origins (frontends)
// const allowedOrigins = [
//   'http://localhost:5173', // Your local frontend for development
//   'https://your-frontend-app-name.onrender.com' // IMPORTANT: Replace with your deployed frontend URL
// ];

// // 2. Configure CORS options
// const corsOptions = {
//   origin: function (origin, callback) {
//     // Check if the incoming origin is in our whitelist OR if it's a server-to-server request (origin is undefined)
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true); // Origin is allowed
//     } else {
//       callback(new Error('This origin is not allowed by CORS policy')); // Origin is not allowed
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
// };

// // 3. Use the CORS middleware with your custom options
// app.use(cors(corsOptions));

// // --- END: DYNAMIC CORS CONFIGURATION ---

// connectDB();

// // Middleware to parse JSON bodies
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('API is running!');
// });

// // Routes
// app.use("/api/auth", authRoutes);
// app.use('/api/sessions', sessionRoutes);
// app.use('/api/questions', questionRoutes);

// app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
// app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

// // Serve uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// // start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation } = require("./controllers/aiController");

const app = express();

// --- START: CORS CONFIGURATION ---
const allowedOrigins = [
  'http://localhost:5173', // Your local frontend for development
  'https://smart-ai-interview-preparation-app-ybli.onrender.com/' // IMPORTANT: Replace with your deployed Render frontend URL
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('This origin is not allowed by CORS policy'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
// --- END: CORS CONFIGURATION ---

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!');
});

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/questions', questionRoutes);
app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

// --- CHANGE 1: Temporarily disable static file serving for Vercel compatibility ---
// app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// --- CHANGE 2: Add this line at the very end for Vercel ---
// This exports your Express app, which is the standard way Vercel's build process works.
module.exports = app;