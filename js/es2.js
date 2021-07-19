/*
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


// PASSAGGI 
/*
1- creo array di oggetti studenti(nome, cognome e age);
2- creo ciclo for...in per far stampare sia in console che in HTML solo le proprietà definite dell'oggetto;
3- creare 3 prompt che generano tre risultati ed inserirli all'interno dell'array di oggetti (creando un nuovo oggetto);
*/

// Mi prendo l'elemento HTML
var displayStudents = document.getElementById("student");
console.log(displayStudents);


// Creo array di oggetti studenti

var students = [{
    name: "Francesco",
    surname: "Cina",
}, {
    name: "Carlo",
    surname: "Rossi",
}, {
    name: "Giovanni",
    surname: "Bianchi",
}]

console.table(students);

// CICLO FOR..IN

var studentInLoop = "";

for (var i = 0; i < students.length; i++) {
    for (var key in students[i]) {
        console.log(students[i][key]);
        studentInLoop += "<li>" + key + " " + students[i][key] + "</li>";
        displayStudents.innerHTML = studentInLoop;
    }
}



