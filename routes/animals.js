const express = require('express');
const router = express.Router();
const Animal = require('../models/animal');

router.get('/', async (req, res) => {
    try {
        const { type, name } = req.query;
        let query = {};
        if (type) {
            query.type = type;
        }
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }
        const animals = await Animal.find(query);
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
