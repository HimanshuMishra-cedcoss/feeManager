const express = require("express");
const router = express.Router();
const student = require("../models/student");
router.get("/", async (req, res) => {
  try {
    // res.send("studentS");
    const stu = await student.find();
    console.log(stu, "student");
    res.json(stu);
  } catch (error) {
    res.send("Error occured: " + error);
  }
});

module.exports = router;
