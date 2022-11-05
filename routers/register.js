const express = require("express");
const router = express.Router();
const student = require("../models/student");

router.post("/", async (req, res) => {
  const studentData = new student({
    admissionNo: req.body.admissionNo,
    SrNo: req.body.SrNo,
    studentName: req.body.studentName,
  });
  try {
    const result = await studentData.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
