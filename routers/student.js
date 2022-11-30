const express = require("express");
const router = express.Router();
const student = require("../models/student");
router.get("/", async (req, res) => {
  try {
    const stu = await student.find(req.query);
    res.json(stu);
  } catch (error) {
    res.send("Error occured: " + error);
  }
});

module.exports = router;
