import server from "./src/server.js";
const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});