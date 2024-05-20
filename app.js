const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const animalRoutes = require('./routes/animals');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/animals', animalRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Pet Expo API');
});

mongoose.connect('mongodb://localhost:27017/pet-expo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
