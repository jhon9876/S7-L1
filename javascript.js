// Esercizio 1
// class User {
//   constructor(_firstName, _lastName, _age, _location) {
//     this.firstName = _firstName;
//     this.lastName = _lastName;
//     this.age = _age;
//     this.location = _location;
//   }

//   confronto = function (utente1, utente2) {
//     if (utente1.age > utente2.age) {
//       console.log(`${utente1.firstName} è più vecchio di ${utente2.firstName}`);
//     } else {
//       console.log(`${utente2.firstName} è più vecchio di ${utente1.firstName}`);
//     }
//   };
// }

// const utente1 = new User("Diego", "Rossi", 50, "Venezuela");
// console.log(utente1);

// const utente2 = new User("Mario", "Alessi", 74, "Italia");
// console.log(utente2);

// const utente3 = new User("Giovanni", "Mellin", 25, "Svizzera");
// console.log(utente3);

// utente1.confronto(utente1, utente3);

// Esercizio 2
class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}
let listaDiAnimaliFinale = {};

const buttonElement = document.querySelector("form");
buttonElement.onsubmit = function (event) {
  event.preventDefault();
  console.log("animale Creato");
  const nameElement = document.getElementById("name");
  console.log(nameElement.value);
  const ownerNameElement = document.getElementById("OwnerName");
  console.log(ownerNameElement.value);
  const speciesElement = document.getElementById("Species");
  console.log(speciesElement.value);
  const breedElement = document.getElementById("Breed");
  console.log(breedElement.value);

  const animale = new pet(
    nameElement.value,
    ownerNameElement.value,
    speciesElement.value,
    breedElement.value
  );
  listaDiAnimali = {
    name: nameElement.value,
    ownerName: ownerNameElement.value,
    species: speciesElement.value,
    breed: breedElement.value,
  };
  listaDiAnimaliFinale = {
    ...listaDiAnimali,
  };
};
console.log(listaDiAnimaliFinale);
