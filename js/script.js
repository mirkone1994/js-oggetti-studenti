/*Descrizione:
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.*/
var studentElement = document.getElementById("student");
var student = {
    name: "Mirko",
    surname: "Chappori",
    age: "27"
}
for ( var key in student) {
    console.log(student[key]);
}

