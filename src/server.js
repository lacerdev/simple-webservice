import express from "express";

const app = express();


const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: "America/Sao_Paulo"
};
app.use(express.static("public"))
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>A Simple WebService</h1>");
});

app.get("/healthy", (request, response) => {
  console.log(`request on ${request.route.path} at ${new Intl.DateTimeFormat('pt-BR', options).format(new Date())}`);
  response.json("I'm in good health");
});

app.get("/get", (request, response) => {
  console.log(`request on ${request.route.path} at ${new Intl.DateTimeFormat('pt-BR', options).format(new Date())}`);
  const { route, query } = request;
  response.json({
    route,
    query,
  });
});

app.post("/post", (request, response) => {
  console.log(`request on ${request.route.path} at ${new Intl.DateTimeFormat('pt-BR', options).format(new Date())}`);
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
