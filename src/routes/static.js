const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Groceryboard for the Kims");
});

module.exports = router;
