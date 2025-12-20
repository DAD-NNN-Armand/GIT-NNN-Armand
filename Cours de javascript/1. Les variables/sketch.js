// const a = 3; //Variable constante impossible à modifier.
// let a = 3; //Variable constante modifiable si une nouvelle valeur s'y oppose. ex : a = 4.
// var a = 3; //Ancienne méthodepour créer une valeur modifiable.

// const a = "Aujourd'hui"; //'Aujourd\'hui' l'anti slash placée devant une guillemet permet de ne pas compter l'apostrophe comme une fermeture des guillemets. Cette méthode est cependant corrigée automatiquement par l'adon Prettier.

// const a = "Aujourd'hui\nComment ça va"; // \n permettrait ? d'indiquer un saut de ligne.

//         const a = 'Salut
// Comment ça va';

const a = "Aujourd'hui\nComment ça va";
console.log(a);
const b = "les gens";

// const isMajeur = null; // null Indique une abscence de valeur

const isMajeur = undefined; // undefined permet d'indiquer une valeur indéfinie.

const notes = [13, 14, 8, 9, "hello", [1, 2, 3]];
const notes2 = notes;
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 24,
  notes: [12, 14, 15],
  job: { name: "Informaticien", hours: 35 },
  [b]: 23, // les [] permettent de définir une valeur extérieure. Dans le cas présent [b] = const b, autrement 'b' = b
};
