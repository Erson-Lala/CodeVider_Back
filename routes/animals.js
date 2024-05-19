const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.post('/', animalController.createAnimal);
router.get('/', animalController.getAllAnimals);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);
router.get('/search', animalController.searchAnimals);

module.exports = router;
