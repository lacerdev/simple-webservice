import express from "express";

const app = express();

// app.use(express.static("public"))
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>A Simple WebService</h1>");
});

app.get("/healthy", (request, response) => {
  response.json("I'm in good health");
});

app.get("/get", (request, response) => {
  const { route, query } = request;
  response.json({
    route,
    query,
  });
});

app.post("/post", (request, response) => {
  const { route, query, body } = request;

  response.json({
    route,
    query,
    body,
  });
});

app.get("/healthy", (request, response) => {
  response.json("I'm in good health");
});

export default app;
