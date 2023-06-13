const express = require("express");
const {foody} = require('../DB/database');
// const {User, ApiHandler, foody} = require('../DB/database');
const app = express();

require("dotenv").config();

app.get("/find", async (req,res) => {
  const Foodys = await foody.find({})
  try {
    res.send(Foodys);
  } catch (err) {
    console.log("Could not fetch information from database", err);
  };
});

// app.get("/data_handler", async (req,res) => {
//   const ApiHandlers = await ApiHandler.find({})
//   try {
//     res.send(ApiHandlers);
//   } catch (err) {
//     console.log("Could not fetch users from database", err);
//   };
// });

// app.get("/data_handler", async (req,res) => {
//   const Foodys = await foody.find({})
//   try {
//     res.send(Foodys);
//   } catch (err) {
//     console.log("Could not fetch information from database", err);
//   };
// });

app.post("/find", async (req,res) => {
  console.log(req.body);

  const Foodys = new foody({
    title: req.body.title,
    link: req.body.link,
    phone: req.body.phone,
    addresss: req.body.address,
    desc: req.body.desc,
    pagemap: {
      rating: req.body.rating,
      review: req.body.review,
      social: req.body.social,
      img: req.body.img
    }
  });
  Foodys.save();
  res.send(Foodys);
});
// app.post("/data_handler", async (req,res) => {
//   console.log(req.body);

//   const ApiHandlers = new ApiHandler({
//     kind: req.body.kind,
//     context: req.body.context,
//     items: req.body.items,
//     url: req.body.url,
//     queries: req.body.queries
//   });
//   ApiHandlers.save();
//   res.send(ApiHandlers);
// });

// app.post("/login", async (req, res) => {
//   console.log(req.body);

//   const Users = new User({
//     email: req.body.email,
//     pwd: req.body.email
//   });
//   res.json({status: "ok"})
//   Users.save();
//   res.send(Users);
// });