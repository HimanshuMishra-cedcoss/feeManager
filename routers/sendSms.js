const express = require("express");
const router = express.Router();

const accountSid = "AC69b074dfff4f4efbe5ff0c881c69d4d5";
const authToken = "c5b5b88196df235c78763a5e331587e6";
const client = require("twilio")(accountSid, authToken);

router.get("/", (req, res) => {
  client.messages
    .create({
      body: "Welcome onboard . Congratulations ! Welcome to the Raksha Career Academy. Best Wishes.",
      from: "+15095161509",
      to: "+917607906213",
    })
    .then((message) => {
      if (message.errorMessage !== null) {
        res.json({ error: message.errorMessage });
      } else {
        res.json("Message sent successfully.");
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

// const fast2sms = require("fast-two-sms");

// router.get("/", async (req, res) => {
//     console.log("res");
//     const result = await fast2sms.sendMessage({
//         authorization:
//         "L7vM8V4ExBXGGr74bc7k3GDljsjDM6TiE8dVRoXNQILco1RpBJP5Ytg0DN8A",
//         message:
//         "Your child has been successfully registered to Raksha Career Academy.",
//         numbers: ["7011190202", "7607906213"],
//     });
//     console.log(result, "send sms");
//     res.json(result);
// });

// const Vonage = require("@vonage/server-sdk");

// router.get("/", (req, res) => {
//   const vonage = new Vonage({
//     apiKey: "7fe55d55",
//     apiSecret: "Yt3BxDfeQysQcPHf",
//   });

//   const from = "Raksha";
//   const to = "917011190202";
//   const text =
//     "Your Student has been registered successfully to the Raksha academy";

//   vonage.message.sendSms(from, to, text, (err, responseData) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (responseData.messages[0]["status"] === "0") {
//         res.json("Message sent successfully.");
//       } else {
//         res.json(
//           `Message failed with error: ${responseData.messages[0]["error-text"]}`
//         );
//       }
//     }
//   });
// });

module.exports = router;
