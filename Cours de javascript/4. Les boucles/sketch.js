// Partie 1 :

// Méthode 1 : Boucle tant qu’une condition est vraie. Utile quand on ne sait pas à l’avance combien d’itérations seront faites.
// let i = 0;
// while (i < 10) {
//   console.log("bonjour");
//   i = i + 1;
// }

// // Méthode 2 : Boucle prévisible avec initialisation, condition et incrémentation dans une même ligne. Idéale pour répéter une action un nombre déterminé de fois.
// for (let i = 0; i < 10; i = i + 1) {
//   console.log("Bonjour");
// }

// Méthode 3 : Parcourt un tableau indexé. Sert à lire ou traiter chaque élément d’un tableau
// const notes1 = [12, 13, 16, 8];
// for (let i = 0; i < notes1.length; i++) {
//   console.log(`${notes1[i]}`;
// }

// Méthode 4 : Parcourt les clés d’un objet ou les indices d’une chaîne. Pour parcourir les propriétés d’un objet ou positions d’une chaîne.
// const notes2 = { a: 1, b: 3 };
// const person = {
//   firstname: "john",
//   lastname: "Doe",
// };
// const greeting = "Bonjour";
// for (let letter in greeting) { //boucle for... in. Existe aussi la boucle for...of
//   console.log(letter);
// }

// Partie 2 :
// Méthode 1 :
// const chiffre = prompt("Entrez un chiffre");
// if (chiffre > 10 || chiffre < 0) {
//   console.log("le nombre n'est pas entre zéro et 10");
// } else {
//   while (chiffre >= 0) {
//     console.log("chiffre");
//     chiffre = chiffre - 1;
//   }
// }

// // Méthode 2 :
// const chiffre2 = prompt("Entrez un chiffre");
// if (chiffre2 > 10 || chiffre2 < 0) {
//   console.log("le nombre n'est pas entre zéro et 10");
// } else {
//   while (chiffre2 >= 0) {
//     console.log("chiffre");
//     chiffre2--; //// Partie 2 :
//     // Méthode 1 :
//     const chiffre2 = prompt("Entrez un nombre");
//     if (chiffre2 > 10 || chiffre2 < 0) {
//       console.log("le nombre n'est pas entre zéro et 10");
//     } else {
//       while (chiffre2 >= 0) {
//         console.log("chiffre");
//         chiffre2 = chiffre2 - 1;
//       }
//     }

// Méthode 3 :
// const chiffre3 = prompt("Entrez un nombre");
// if (chiffre3 > 10 || chiffre3 < 0) {
//   console.log("le nombre n'est pas entre zéro et 10");
// } else {
//   while (chiffre3 >= 0) {
//     console.log(chiffre3);
//     chiffre3--; //forme abrégé de = chiffre - 1
//   }
// }

// Méthode 4 :
// let chiffre4 = prompt("Entrez un nombre");
// if (chiffre4 > 10 || chiffre4 < 0) {
//   console.log("le nombre n'est pas entre zéro et 10");
// } else {
//   for (let i = chiffre4; i >= 0; i--) {
//     console.log(i);
//   }
// }

// Partie 3 :
// Méthode 1 :
// let guess = 8;
// let chiffre5; // Il faut déclarer avant la boucle

// while (chiffre5 !== guess) {
//   chiffre5 = prompt("Devinez à quel chiffre je pense") * 1;
//   if (chiffre5 < guess) {
//     console.log("C'est plus");
//   } else if (chiffre5 > guess) {
//     console.log("C'est Moins");
//   }
// }

// console.log("Comment t'as trouvé?");

// Méthode 2 :
let guess = 8;
let chiffre5; // Il faut déclarer avant la boucle

while (true) {
  chiffre5 = prompt("Devinez à quel chiffre je pense") * 1;
  if (chiffre5 < guess) {
    console.log("C'est plus");
  } else if (chiffre5 > guess) {
    console.log("C'est Moins");
  } else {
    break;
  }
}

console.log("Comment t'as trouvé?");
