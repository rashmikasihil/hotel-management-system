const express = require("express");
const router = express.Router();
const {
  createHotel,
  getHotels,
  updateHotel,
  deleteHotel
} = require("../controllers/hotelController");

router.post("/", createHotel);
router.get("/", getHotels);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

module.exports = router;