const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// const LoginInfo = new Schema({
//   "email": {
//     "type": String,
//     "required": true,
//     "unique": true
//   },
//   "pwd": {
//     "type": String,
//     "required": true
//   }
// });



const FoodyApi = new Schema({
  title: String | Object | Array | null | undefined,
  link: String | Object | Array | null | undefined,
  phone: String | Object | Array | null | undefined,
  address: String | Object | Array | null | undefined,
  desc: String | Object | Array | null | undefined,
  pagemap: {
    rating: String | Object | Array | null | undefined,
    review: String | Object | Array | null | undefined,
    social: String | Object | Array | null | undefined,
    img: String | Object | Array | null | undefined,
  }
});

// const CustomSearchApi = new Schema({
//   kind: String | Object | Array | null | undefined,
//   context: String | Object | Array | null | undefined,
//   items: String | Object | Array | null | undefined,
//   url: String | Object | Array | null | undefined,
//   queries: String | Object | Array | null | undefined

// });


const Foody = mongoose.model('foody', FoodyApi);
// const User = mongoose.model("User", LoginInfo);
// const ApiHandler = mongoose.model("ApiHandler", CustomSearchApi);
const mySchemas = {'foody': Foody};
// const mySchemas = {'ApiHandler': ApiHandler, 'User': User, 'foody': Foody};
module.exports = mySchemas;