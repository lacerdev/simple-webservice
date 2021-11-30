import express from "express";

const app = express();

app.get("/healthy", (request, response) => {
  response.json("I'm in good health");
});

export default app;
