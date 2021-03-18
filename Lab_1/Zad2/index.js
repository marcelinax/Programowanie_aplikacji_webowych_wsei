var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + " " + person.surname + ", " + person.age + ", " + person.role);
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
}
// function filterPersons(persons: Person[], criteria: any): Person[] {
//     // return persons.filter(function(el){
//     // });
// // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
// }
// TODO:
users.forEach(function (u) { return logPerson(u); });
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
