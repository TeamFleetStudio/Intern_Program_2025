const express = require('express');
const router = express.Router();
const Form = require("../models/Form");

router.post("/post", async (req, res) => {
    try {
        const { name, email, phone, website, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ message: "All required fields must be filled" });
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
            message: "Form submitted successfully",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;