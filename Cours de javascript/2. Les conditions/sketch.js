//Partie 1 du Cours

// console.log("Bonjour les gens"); //console.log() permet d'afficher instantanément dans la console un texte ou une variable qui lui est assignée.

//Methode 1 :
const age1 = 18;
const pays1 = "FR";

//VRAI ET VRAI = VRAI
// VRAI ET FAUX = FAUX
// FAUX ET FAUX = FAUX
// VRAI OU FAUX = VRAI
// VRAI OU VRAI = VRAI
// FAUX OU FAUX = FAUX

//Toujours écrire if en minuscule
if ((pays1 === "FR" && age1 >= 18) || (pays1 === "US" && age1 >= 16)) {
  //== les deux valeurs sont égales ; === les deux valeurs sont identiques; !== les deux valeurs sont différentes
  console.log("Vous avez le droit de conduire");
}

//Methode 2 :
const age2 = 16;
const pays2 = "US";
const peutConduireFrance = pays2 === "FR" && age2 >= 18;
const peutConduireUS = pays2 === "US" && age2 >= 16;

if (peutConduireFrance || peutConduireUS) {
  console.log("Vous avez le droit de conduire");
} else {
  console.log("Vous n'avez pas le droit de conduire");
}

//Methode 3 :
const age3 = 15;
const pays3 = "US";
const peutConduireFrance3 = pays3 === "FR" && age3 >= 18;
const peutConduireUS3 = pays3 === "US" && age3 >= 16;

if (peutConduireFrance3) {
  console.log("Vous avez le droit de conduire en france");
} else if (peutConduireUS3) {
  console.log("Vous avez pas le droit de conduire aux USA");
} else {
  console.log("Vous n'avez pas le droit de conduire");
}

//Methode 4 :
const age4 = 15;
const pays4 = "US";
const peutConduireFrance4 = pays4 === "FR" && age4 >= 18;
const peutConduireUS4 = pays4 === "US" && age4 >= 16;

if (!peutConduireFrance4 && !peutConduireUS4) {
  console.log("Vous n'avez pas le droit de conduire");
}

//Methode 5 :
const age5 = 15;
const pays5 = "US";
const peutConduireFrance5 = pays5 === "FR" && age5 >= 18;
const peutConduireUS5 = pays5 === "US" && age5 >= 16;

if ((pays5 !== "FR" || age5 < 18) && (pays5 !== "US" || age5 < 16)) {
  console.log("Vous n'avez pas le droit de conduire");
}

//Methode 6 :
const age6 = 15;
const pays6 = "FR";
const peutConduireFrance6 = pays6 === "FR" && age6 >= 18;
const peutConduireUS6 = pays6 === "US" && age6 >= 16;

switch (pays6) {
  case "FR":
    console.log("Je suis en france");
    break;
  case "US":
    console.log("Je suis aux états unis");
    break;
  default:
    console.log("Je suis dans un autre pays");
    break;
}

//Partie 2 du Cours
// Méthode 1 :
const year1 = 2022;
const birthyear1 = prompt("Quel est votre année de naissance ?");
if (birthyear1 >= 2022) {
  console.log("Lilo & Stitch");
} else if (birthyear1 < 2022 && birthyear1 > 2012) {
  console.log("Matrix");
} else {
  console.log("Evil dead");
}

// Méthode 2 :
const year2 = 2022;
const birthyear2 = prompt("Quel est votre année de naissance ?");
const age8 = year2 - birthyear2;
if (age8 <= 13) {
  console.log("Lilo & Stitch");
} else if (age8 < 18) {
  console.log("Matrix");
} else {
  console.log("Evil dead");
}

//Partie 3 du Cours
// Méthode 1 :
const A1 = prompt("Entrez un premier nombre");
const B1 = prompt("Entrez un second nombre");
const result1 = A1 * B1;

if (result1 > 0) {
  console.log(`${A1}×${B1}=${result1} est positif`); //Toujours mettre des backtick pour que la console reconnaisse les ${...} comme des variables.
} else {
  console.log(`${A1}×${B1}=${result1} est negatif`);
}

// Méthode 2 :
const A2 = prompt("Entrez un premier nombre");
const B2 = prompt("Entrez un second nombre");
const result2 = A2 * B2;
let signe;
if (isNaN(result)) {
  console.log(`Opération impossible: ${A2}×${B2} `);
}
if (result2 > 0) {
  signe = "positif";
} else {
  signe = "négatif";
}
console.log(`${A2}×${B2}=${result2} est ${signe}`);
