require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
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

async function addDataToDB(req, res) {
  try {
    let new_data = req.body;
    let db = req.query.db;
    await client
      .db(process.env.db)
      .collection(db)
      .insertOne(new_data, (err, result) => {
        if (err) throw err;
        res.status(201).send(result.insertedId);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  testServer,
  endPointNotFound,
  addDataToDB
};
