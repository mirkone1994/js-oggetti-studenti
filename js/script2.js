/*ES 2
Creare un array di oggetti studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/
var objectStudents = [
    {
        names: "Mirko",
        surname: "Chiappori",
        age: 27,
    },
    {
        names: "Lorenzo",
        surname: "Cazzola",
        age: 26,
    },
    {
        names: "Giovanni",
        surname: "Leoncini",
        age: 27,
    },
];
var names = prompt("Nome?");
var surname = prompt("Cognome?")
var age = parseInt(prompt("Età?"));
var newUser = {
    names: names,
    surname: surname,
    age: age,
}
objectStudents.push(newUser);
console.table(objectStudents);
