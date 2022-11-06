// const http = require("http");
const db = require("./dbConnect");
const express = require("express");
const registerRoute = require("./routers/register");
const studentRoute = require("./routers/student");
const msgBodyRoute = require("./routers/msgBody")
// const bodyParser = require("body-parser");

const app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
// app.use(bodyParser.json());

app.use(express.json());

/**
 * register student api
 */

app.use("/register", registerRoute);

/**
 * api to get students
 */

app.use("/students", studentRoute);

/**
 * api for sms text body 
 */

app.use("/smstext" , msgBodyRoute )

app.get("/", (req, res) => {
  res.send("hello himanshu");
});

app.listen(3000, () => {
  console.log("Server Connected:");
});
