const Animal = require('../models/animal');

exports.createAnimal = async (req, res) => {
    try {
        const animal = new Animal(req.body);
        await animal.save();
        res.status(201).json(animal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
        if (!animal) {
            return res.status(404).json({ error: 'Animal not found' });
        }
        res.status(200).json(animal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findByIdAndDelete(id);
        if (!animal) {
            return res.status(404).json({ error: 'Animal not found' });
        }
        res.status(200).json({ message: 'Animal deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchAnimals = async (req, res) => {
    try {
        const { name } = req.query;
        const animals = await Animal.find({ name: { $regex: name, $options: 'i' } });
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
