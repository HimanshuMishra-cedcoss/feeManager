const mongoose = require("mongoose");
const { MONGOURI } = require("./Config/keys");

mongoose.connect(MONGOURI, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", async () => {
  console.log("db Connected");
  // await getDbs();
});

// async function getDbs() {
//   //now call the list databases function
//   //  var Admin = mongoose.mongo.Admin;
//   //   new Admin(mongoose.db).listDatabases(function (err, results) {
//   //     console.log(results); //store results and use
//   //   });
//   mongoose.connection.db.collectionNames(function(error, names) {
//     if (error) {
//       throw new Error(error);
//     } else {
//       names.map(function(name) {
//         console.log('found collection %s', name);
//       });
//     }
//   });
// }
