import express from "express";
import {
  articlesGet,
  rankingsGet,
  collectionsGet,
} from "../controllers/content.controllers";

const app = express();

// Articles
app.get("/articles", articlesGet);

// Rankings
app.get("/rankings", rankingsGet);

// Collections
app.get("/collections", collectionsGet);

// Delete
// app.get("/", userDelete);

export default app;
