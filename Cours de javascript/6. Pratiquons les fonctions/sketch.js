// Exercice 1 :
function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word.toUpperCase() === reversedWord.toUpperCase(); //Sans les parenthèses, ce serait comparer la chaîne word.toUpperCase() à la fonction reversedWord.toUpperCase, au lieu de comparer deux chaînes.
}

const words = {
  kayak: true,
  SOS: true,
  Kayak: true,
  Bonjour: false,
};
for (let word in words) {
  if (isPalindrome(word) !== words[word]) {
    console.error(`isPalindrome(${word})`);
  }
}

// Exercice 2 :
// Calculer la moyen des notes des élèves
// organiser les élèves selon la moyenne la plus élevée
//afficher un top trois des élèves
const students = [
  {
    names: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    names: "Jane",
    notes: [17, 20, 18, 13, 15],
  },
  {
    names: "Sophie",
    notes: [17, 12, 18, 14, 13],
  },
  {
    names: "Marc",
    notes: [1, 2, 8, 9, 5],
  },
  {
    names: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];

// => indique qu’on utilise une fonction fléchée (arrow function), une syntaxe moderne en JavaScript pour définir des fonctions plus simplement.
const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};

const compareStudent = (a, b) => {
  return b.moyenne - a.moyenne;
};

for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.worst = Math.min(...student.notes);
  student.best = Math.max(...student.notes);
}

students.sort(compareStudent);

const formatStudent = (student) => {
  return `${student.name} avec une moyenne de (${student.moyenne}), une note maximale de (${student.best}), et une note minimale de (${student.worst})`;
};
console.log(`Top 3 étudiant
  1: ${formatStudent(students[0])} 
  2: ${formatStudent(students[1])} 
  3: ${formatStudent(students[2])} 
`);

// Exercice 3 :
const phrase = `Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres. Des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée. Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l'interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n'est pas mon cas, comme je disais là, puisque moi au contraire, j'ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie, je ne suis qu'amour. Et finalement, quand beaucoup de gens aujourd'hui me disent « mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c'est ce goût de l'amour ce goût donc qui m'a poussé aujourd'hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi...
`;
const frequencies = {};
const ignored = [(",", "?", "»", "«", ":", ".")];
let cleanedPhrase = phrase.toLowerCase();
for (let character of ignored) {
  cleanedPhrase = cleanedPhrase.replaceAll(character, "");
}
const words2 = phrase
  .toLowerCase()
  .replaceAll(",", "")
  .replaceAll("?", "")
  .replaceAll("»", "")
  .replaceAll(":", "")
  .replaceAll("«", "")
  .replaceAll(".", "")
  .split(" ");
for (let word2 of words2) {
  if (word2 !== "" && word2.length >= 3) {
    if (frequencies[word2]) {
      frequencies[word2]++;
    } else {
      frequencies[word2] = 1;
    }
  }
}
const frequenciesArray = [];
for (let k in frequencies) {
  frequenciesArray.push({
    word2: k,
    count: frequencies[k],
  });
}
frequenciesArray.sort((a, b) => b.count - a.count);
console.log(
  `les mots les plus fréquents sont "${frequenciesArray[0].word2}" (${frequenciesArray[0].count}), "${frequenciesArray[1].word2}" (${frequenciesArray[1].count}) ${frequenciesArray[2].word2} (${frequenciesArray[2].count})`
);
