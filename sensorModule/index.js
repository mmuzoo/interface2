function generateRandomSensorData(sensorType) {
    if (sensorType === 'Temperature') {
        return Math.floor(Math.random() * 40); // Willekeurige temperatuur
    } else if (sensorType === 'Humidity') {
        return Math.floor(Math.random() * 100); // Willekeurige luchtvochtigheid
    }
    return null;
}

module.exports = generateRandomSensorData;
