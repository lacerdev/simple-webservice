import server from "./src/server.js";

server.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
