// Partie 1 :

// Méthode 1 : Lorsque l'on déclare une function. Celle-ci est calculée en premier peut importe l'ordre dans laquelle elle a été placée.
// function canDrive(age, pays) {
//   if ((age > 18 && pays === "FR") || (age > 16 && pays === "US")) {
//     return true;
//   }
//   return false;
// }

// console.log(canDrive(13, "FR"));

// // Méthode 2 :
// const canDrive = function (age, pays) {
//   if ((age > 18 && pays === "FR") || (age > 16 && pays === "US")) {
//     return true;
//   }
//   return false;
// };

// console.log(canDrive(13, "FR"));

// // Méthode 3 :
// if (true) {
//   const canDrive = function (age, pays) {
//     if ((age > 18 && pays === "FR") || (age > 16 && pays === "US")) {
//       return true;
//     }
//     return false;
//   };
// }

// function canDrive() {
//   return "Hello";
// }

// console.log(canDrive(13, "FR"));

// Méthode 4 :
// let i = 0;

// function greeting(name) {
//   i++;
//   console.log(`Bonjour ${name}`);
// }
// // Comme i++ est intégrée à la fonction, une unité s'ajoute à chaque activation du console.log(i)
// console.log(i);
// greeting("John");
// console.log(i);
// greeting("Jane");
// console.log(i);

// // Méthode 5 :
// function maFonction() {
//   console.log(this);
// }

// maFonction.call(3);

// // Méthode 6 :
// const a = {
//   firstname: "John",
//   lastname: "Doe",
//   fullname: function () {
//     console.log(`$ {this.firstname} ${this.lastname}`);
//   },
// };

// maFonction.call(3);

// // Méthode 7 :
// const a = {
//   firstname: "John",
//   lastname: "Doe",
//   fullname: function () {
//     console.log(`$ {this.firstname} ${this.lastname}`);
//   },
// };

// a.fullname();
// console.log("Hello".toUpperCase());

// // Méthode 8 :
// const a = {
//   firstname: "John",
//   lastname: "Doe",
//   fullname: function () {
//     console.log(`$ {this.firstname} ${this.lastname}`);
//   },
// };

// const maFonction = (param1, param2) => {
//   console.log(param1, param2, this);
// };

// maFonction.call(3, 1, 2);

// Méthode 9 :
// const isPair = function (a, cb) {
//   if (a % 2 === 0) {
//     cb(a);
//   }
// };

// isPair(4, function (n) {
//   console.log("Mon nombre est pair" + n);
// });

// Partie 2 :
// On crée un nombre aléatoire entre 0 $ 10
// 3 essaie pour deviner le mot
// isRight(n);
// guess();

// Méthode 1 :

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max + 1);
// }
// const solution = getRandomInt(10);
// console.log(solution);

// function isRight(n) {
//   return solution === n;
// }

// function guess() {
//   const number = prompt("Devines mon chiffre") * 1;
//   return isRight(number);
// }

// for (i = 0; i < 3; i++) {
//   if (guess()) {
//     console.log("Comment t'as trouvez");
//     break;
//   } else if (i === 2) {
//     console.log("J'ai gagné");
//   }
// }

// Méthode 2 :

function isPremier(n) {
  if (n < 2) {
    // n vaut 3 → faux
    return false;
  }
  for (let i = n - 1; i > 1; i--) {
    // i = 2
    if (n % i === 0) {
      // 3 % 2 = 1 → faux
      return false;
    }
  }
  return true; // aucune division exacte trouvée
}

const isPair = (n) => n % 2 === 0;

console.log("0", isPremier(0));
console.log("1", isPremier(1));
console.log("2", isPremier(2));
console.log("3", isPremier(3));
console.log("11", isPremier(11));
console.log("12", isPremier(12));
