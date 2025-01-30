// Haal de status op van het ruimtevoertuig
async function fetchStatus() {
    try {
        const response = await fetch('http://localhost:3000/status');
        const status = await response.json();

        document.getElementById('power').textContent = `Power: ${status.power}`;
        document.getElementById('speed').textContent = `Speed: ${status.speed}`;
        document.getElementById('fuel').textContent = `Fuel: ${status.fuel}`;
        document.getElementById('battery').textContent = `Battery: ${status.battery}%`;
        document.getElementById('sensors').textContent = `Sensors: ${status.sensors.join(', ')}`;
        document.getElementById('resources').textContent = `Resources: ${status.resources.join(', ')}`;
    } catch (error) {
        console.error('Error fetching status:', error);
    }
}

// Stuur een actie naar de server
async function submitAction() {
    const action = document.getElementById('actionSelect').value;
    const details = document.getElementById('detailsInput').value;

    try {
        const response = await fetch('http://localhost:3000/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action, details })
        });

        const result = await response.json();
        console.log(result);
        fetchStatus(); // Herlaad de status na het uitvoeren van de actie
    } catch (error) {
        console.error('Error submitting action:', error);
    }
}

// Haal de status op bij het laden van de pagina
fetchStatus();
