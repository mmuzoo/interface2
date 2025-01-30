const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const generateRandomSensorData = require('./sensorModule'); // Importeer de sensorModule

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory status data voor het ruimtevoertuig
let spacecraftStatus = {
    battery: 85, // Battery percentage
    sensors: ['Temperature', 'Humidity'], // Actieve sensoren
    resources: ['Iron ore', 'Gold', 'Silver'], // Gevonden grondstoffen
    speed: 0, // Snelheid
    fuel: 100, // Brandstofniveau
    power: "ON" // Stroomstatus
};

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET /status - Geeft de huidige status van het ruimtevoertuig terug
app.get('/status', (req, res) => {
    res.json(spacecraftStatus);
});

// POST /action - Voer een actie uit op het ruimtevoertuig
app.post('/action', (req, res) => {
    const { action, details } = req.body;

    if (action === 'Move Forward') {
        spacecraftStatus.speed += 10;
        spacecraftStatus.action = 'Moving Forward';
    } else if (action === 'Activate Sensor') {
        if (details) {
            spacecraftStatus.sensors.push(details);
        }
        spacecraftStatus.action = 'Sensor Activated';
    } else if (action === 'Sleep Mode') {
        spacecraftStatus.action = 'In Sleep Mode';
        spacecraftStatus.speed = 0;
    }

    res.json({ status: 'Action executed', spacecraftStatus });
});

// Start server
app.listen(PORT, () => {
    console.log(`Spacecraft backend is running on http://localhost:${PORT}`);
});
