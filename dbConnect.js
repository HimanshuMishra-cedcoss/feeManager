// const { MongoClient } = require("mongodb");

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */

//   const dbUrl =
//     "mongodb+srv://HimanshuJS:HimanshuJS@cluster0.bxbjkfd.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(dbUrl);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// // listing the database

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:HEY");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// // module.exports = { main };

// connecting mongo db through mongoose

const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://HimanshuJS:HimanshuJS@cluster0.bxbjkfd.mongodb.net/feeManager?retryWrites=true&w=majority";

mongoose.connect(dbUrl, { useNewUrlParser: true });
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
