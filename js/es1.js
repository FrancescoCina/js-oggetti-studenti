/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/

// DEFINIZIONE ELEMENTO HTML DA PRENDERMI

var displayStudent = document.getElementById("student");

// CREAZIONE OGGETTO "STUDENT"
var student = {
    name: "Francesco",
    surname: "Cina",
    age: 26,
}

// CICLO FOR...IN PER STAMPARE TUTTE LE PROPRIETA' INTERNE ALL'OGGETTO

var studentElement = "";
for (var key in student) {
    studentElement += "<li>" + key + " " + student[key] + "</li>";
}
displayStudent.innerHTML = studentElement;
