require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const assert = require("assert");
const mongoDBConnectionString = `mongodb+srv://${process.env.mongoDBUsername}:${process.env.mongoDBPassword}@cluster0-cthkj.mongodb.net/${process.env.db}?retryWrites=true&w=majority`;
var client = new MongoClient(mongoDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//GENERAL
(async () => {
  try {
    await client.connect((err) => {
      if (err) throw err;
      if (client.isConnected()) {
        console.log("Connection established to DB");
      } else {
        throw new Error("Connection not established to DB");
      }
    });
  } catch (err) {
    console.log("Connection not established to DB");
    // console.log(err);
  }
})();

function testServer(req, res) {
  try {
    res.status(200).send("Server is running...");
  } catch (err) {
    console.log("Error");
    res.status(500).send(err);
  }
}

function endPointNotFound(req, res) {
  try {
    res.status(404).send("Endpoint not found");
  } catch (err) {
    console.log("Error");
    res.status(500).send(err);
  }
}

module.exports = {
  testServer,
  endPointNotFound,
};
