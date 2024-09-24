// script.js
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const datetime = document.getElementById("datetime").value;
    const people = document.getElementById("select1").value;
    const message = document.getElementById("message").value;

    // Extraire la date et l'heure du champ "datetime"
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Affiche le message de confirmation
    document.getElementById("confirmationMessage").classList.remove("hidden");
    document.getElementById("confirmedName").innerText = name;
    document.getElementById("confirmedPeople").innerText = people;
    document.getElementById("confirmedDate").innerText = formattedDate;
    document.getElementById("confirmedTime").innerText = formattedTime;

    // Optionnel : Réinitialise le formulaire
    document.getElementById("reservationForm").reset();
});
