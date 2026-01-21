const express = require('express');
const Form = require('../models/Form');
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, website, message } = req.body;

    if (!email || !phone || !website) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newForm = new Form({
      name,
      email,
      phone,
      website,
      message,
    });

    await newForm.save();

    res.status(201).json({
      message: "Form data saved successfully",
      data: newForm,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;