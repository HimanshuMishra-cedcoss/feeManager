// const http = require("http");
const db = require("./dbConnect");
const express = require("express");
const registerRoute = require("./routers/register");
const studentRoute = require("./routers/student");
const msgBodyRoute = require("./routers/msgBody");
const sendSmsRoute = require("./routers/sendSms");
const feeSubmit = require("./routers/feeSubmit");
const cors = require("cors");
// const bodyParser = require("body-parser");

const app = express();
app.use(cors());

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
 * api for save and edit sms text body
 */

app.use("/smstext", msgBodyRoute);

/**
 * api to send sms
 */

app.use("/sendSms", sendSmsRoute);

/**
 * api to add fee details
 */

app.use("/submitFee", feeSubmit);

// if (process.env.NODE_ENV === "production") {
const path = require("path");

app.get("/", (req, res) => {
  app.use(express.static(path.resolve("client", "build")));
  res.sendFile(path.resolve("client", "build", "index.html"));
});
// }

app.listen(4000, () => {
  console.log("Server Connected:");
});
