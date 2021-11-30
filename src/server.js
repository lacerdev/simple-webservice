import express from "express";

const app = express();

// app.use(express.static("public"))

app.get("/", (request, response) => {
  response.send("<h1>A Simple WebService</h1>");
});

app.get("/healthy", (request, response) => {
  response.json("I'm in good health");
});

export default app;
