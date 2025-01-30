# Spacecraft Control Backend

## Overzicht
Dit project is een backend API voor het beheren en besturen van een ruimtevoertuig. Het biedt een eenvoudige interface om gegevens over het ruimtevoertuig op te halen en acties zoals snelheid aanpassen of sensoren activeren uit te voeren. Het bevat ook een frontend die verbinding maakt met de backend.

## Features
- Ophalen van de status van het ruimtevoertuig (batterijpercentage, snelheid, sensoren, etc.).
- Mogelijkheid om acties uit te voeren, zoals:
  - Snelheid verhogen.
  - Sensor activeren.
  - Slaapmodus inschakelen.
- Willekeurige sensorgegevens genereren met behulp van een herbruikbare module (`sensorModule`).
- Frontend interface voor interactie met de backend.

## Installatie

1. **Cloning het project**
   ```bash
   git clone https://github.com/your-username/spacecraft-control-backend.git
   cd spacecraft-control-backend
