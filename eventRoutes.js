const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

router.post("/events", async (req, res) => {
  const event = new Event(req.body);

  await event.save();

  res.json(event);
});

router.get("/events", async (req, res) => {
  const events = await Event.find();

  res.json(events);
});

module.exports = router;
