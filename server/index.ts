import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Env
dotenv.config({ path: "../.env" });

// Express & Port
const app = express();
app.use(express.json());
const port = process.env.SERVER_PORT || 5000;

// CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Route Index
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Port
app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
