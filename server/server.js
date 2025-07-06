import express from "express";
import "dotenv/config";
import cors from "cors";
import { connect } from "mongoose";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
const app = express();
await connectDB();
// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://luna-blog-nine.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (e.g., Postman) or whitelisted
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // if you plan to use cookies or auth headers
  })
);

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
