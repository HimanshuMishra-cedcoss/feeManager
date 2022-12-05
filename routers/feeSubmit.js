const express = require("express");
const router = express.Router();
const student = require("../models/student");

router.post("/", async (req, res) => {
  try {
    const feeStatus =
      req.body.totalFees === req.body.paidFees ? "Paid" : "Partially-Paid";
    const result = await student.findOneAndUpdate(
      { admissionNo: req.body.admissionNo },
      {
        totalFee: req.body.totalFees,
        paidFees: req.body.paidFees,
        feeStatus: feeStatus,
      }
    );
    if (result) {
      res.json("Fees updated successfully.");
    } else {
      res.json("Unable to update fees.");
    }
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
