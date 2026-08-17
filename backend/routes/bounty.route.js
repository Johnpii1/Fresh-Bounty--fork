const express = require("express");
const {
  createBounty,
  getBounty,
  updateBounty,
  deleteBounty,
} = require("../controller/bounty.controller");

const router = express.Router();

// create routes
router.route("/create").post(createBounty);
router.route("/get-bounty/:id").get(getBounty);
router.route("/update/:id").patch(updateBounty);
router.route("/delete/:id").delete(deleteBounty)

module.exports = router;
