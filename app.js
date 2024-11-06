const express = require("express");
require("dotenv").config();
const http = require("http");
const app = express();
const PORT = process.env.PORT || 4000;
const whatsAppController = require("./controller/whatsAppController");
const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});
app
  .get("/whatsapp", whatsAppController.verifyToken)
  .post("/whatsapp", whatsAppController.receiveMessage);

async function start() {
  server.listen(PORT, () => {
    console.log("SERVER ACTIVO: PUERTO USADO :" + PORT);
  });
}

start();
