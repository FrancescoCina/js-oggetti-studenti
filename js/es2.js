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


// console.log(students[2].surname);



// DEFINIZIONE OGGETTO DEL NUOVO STUDENTE

var newStudent = {
    name: "",
    surname: "",
    age: "",
};



// DEFINIZIONE VARIABILI PER PROMPT

var userStudentName = "";
var userStudentSurname = "";
var userStudentAge = 0;



// PROMPT + CONTROLLI

// Name

do {
    userStudentName = prompt("Qual è il nome dello studente?");

} while (!userStudentName || userStudentName.trim() === "");



// Surname

do {
    userStudentSurname = prompt("Qual è il cognome dello studente?");

} while (!userStudentSurname || userStudentSurname.trim() === "");


// Age
do {
    userStudentAge = prompt("Qual è l'età dello studente?");

} while (!userStudentAge || userStudentAge.trim() === "");



// Inserimento dati del prompt all'interno del nuovo oggetto (newStudent)

newStudent.name = userStudentName;
newStudent.surname = userStudentSurname;
newStudent.age = userStudentAge;

console.log(newStudent);


// INSERIMENTO NUOVO OGGETTO (newStudent) IN ARRAY (students)
students.push(newStudent);
console.log(students);




// CICLO FOR..IN

var studentInLoop = "";

for (var i = 0; i < students.length; i++) {
    for (var key in students[i]) {
        console.log(students[i][key]);
        studentInLoop += "<li>" + key + " " + students[i][key] + "</li>";
        displayStudents.innerHTML = studentInLoop;
    }
}
