import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contentRouter from "./src/routes/content.routes";

// Env
dotenv.config({ path: "../.env" });

// Express & Port
const app = express();
app.use(express.json());
const port = process.env.NFTSEA_SERVER_PORT || 5000;

// CORS middleware
app.use(
  cors({
    origin:
      process.env.NFTSEA_CLIENT_URL + ":" + process.env.NFTSEA_CLIENT_PORT,
    credentials: true,
  })
);

// Route Index
app.use("/", contentRouter);

// Port
app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
