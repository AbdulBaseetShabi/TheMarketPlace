require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const mongoDBConnectionString = `mongodb+srv://${process.env.mongoDBUsername}:${process.env.mongoDBPassword}@cluster0-cthkj.mongodb.net/${process.env.db}?retryWrites=true&w=majority`;
var client = new MongoClient(mongoDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clientTwilio = require("twilio")(
 process.env.sID,
 process.env.authToken
);

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

async function getDataFromDBHelper(db, condition, callback) {
  let param = condition !== undefined ? condition : {};
  await client
    .db(process.env.db)
    .collection(db)
    .find(param)
    .toArray((err, result) => {
      callback(err, result);
    });
}

async function getDataFromDB(req, res) {
  try {
    let db = req.query.db;
    let condition = req.body;
    await getDataFromDBHelper(db, condition, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

async function updateDataInDBHelper(db, value, callback) {
  let id = value._id;
  delete value._id;
  await client
    .db(process.env.db)
    .collection(db)
    .updateOne(
      { _id: new ObjectID(id) },
      { $set: value },
      { upsert: true },
      (err, result) => {
        callback(err, result);
      }
    );
}

async function updateDataInDB(req, res) {
  try {
    let value = req.body;
    let db = req.query.db;
    await updateDataInDBHelper(db, value, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

async function removeDataFromDB(req, res) {
  try {
    let id = req.body._id;
    let db = req.query.db;
    await client
      .db(process.env.db)
      .collection(db)
      .deleteOne({ _id: new ObjectID(id) }, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

async function sendTextMessage(req, res) {
  try {
    let body = req.body;
    await clientTwilio.messages
      .create({
        body: body.message,
        to: body.to,
        from: process.env.number,
      })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        if (err) throw err;
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  testServer,
  endPointNotFound,
  addDataToDB,
  getDataFromDB,
  updateDataInDB,
  removeDataFromDB,
  sendTextMessage,
};
