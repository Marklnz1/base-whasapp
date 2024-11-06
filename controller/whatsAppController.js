require("dotenv").config();
const MY_TOKEN = process.env.MY_TOKEN;

module.exports.verifyToken = (req, res) => {
  try {
    let token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];
    if (challenge != null && token != null && token == MY_TOKEN) {
      res.send(challenge);
      return;
    }
  } catch (e) {
    console.log(e.message);
  }
  res.sendStatus(404);
};

module.exports.receiveMessage = async (req, res) => {
  return res.sendStatus(200);
};
