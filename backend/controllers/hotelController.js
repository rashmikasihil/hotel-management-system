const Hotel = require("../models/Hotel");

// CREATE
exports.createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
exports.getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
};

// UPDATE
exports.updateHotel = async (req, res) => {
  const hotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(hotel);
};

// DELETE
exports.deleteHotel = async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.json({ message: "Hotel deleted" });
};