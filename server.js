const express = require("express");
const {mongoose, ServerApiVersion} = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const {foody} = require("./DB/database");
// const {User, ApiHandler, foody} = require("./DB/database");

require("dotenv").config();


const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 5050;
const app = express();

mongoose.connect(MONGODB_URI, () => { 
  try {
    return {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    };
  } catch (err) {
    console.log("mongoose connection error:", err);
  }
});

const MongooseConnection = mongoose.connection;

MongooseConnection.on("connected", (stream) => {
  console.log("Successful connection to database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8100",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/", router);

// app.post("/data_handler", (req,res) => {
//   const ApiHandlers = new ApiHandler({
//     kind: req.body.kind,
//     context: req.body.context,
//     items: req.body.items,
//     url: req.body.url,
//     queries: req.body.queries
//   });
//   console.log("Api handler: ",ApiHandlers)
//   ApiHandlers.save();
//   res.send(ApiHandlers);
// });

app.get("/find", async (req,res) => {
  const Foodys = await foody.find({})
  try {
    res.send(Foodys);
  } catch (err) {
    console.log("Could not fetch information from database", err);
  };
});


app.listen(port, () => {
  console.log(`Connected to server on port: ${port}`);
});