import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.write("A Simple WebService");
  response.end();
});

app.get("/healthy", (request, response) => {
  response.json("I'm in good health");
});

export default app;
