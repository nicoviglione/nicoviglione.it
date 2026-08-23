const statusText = document.getElementById("status-text");
const message = document.getElementById("message");
const channelNumber = document.getElementById("channel-number");

const transmissions = [
    {
        status: "RICERCA DEL SEGNALE...",
        message: "Il nuovo sito è in costruzione.<br>Il segnale sta arrivando."
    },
];

let transmissionIndex = 0;

function changeTransmission() {
    transmissionIndex = (transmissionIndex + 1) % transmissions.length;
    const transmission = transmissions[transmissionIndex];

    if (statusText) statusText.textContent = transmission.status;
    if (message) message.innerHTML = transmission.message;
    if (channelNumber) channelNumber.textContent = String(transmissionIndex + 1).padStart(2, "0");
}

setInterval(changeTransmission, 4200);
