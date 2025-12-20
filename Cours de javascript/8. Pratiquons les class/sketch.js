// Exercie 1 : Le rectangle sera construit à l'aide de 2 informations (la largeur et la hauteur). Le carré lui sera construit qu'avec une seule dimension et sera l'extension du rectangle.
// class rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get perimeter() {
//     return (this.width + this.height) * 2;
//   }

//   get isValid() {
//     return this.width > 0 && this.height > 0;
//   }

//   isBiggerThan(shape) {
//     return this.perimeter > shape.perimeter;
//   }
// }

// class square extends rectangle {
//   constructor(width) {
//     super(width, width);
//   }
// }
// const r = new rectangle(10, 20);
// console.log(r.perimeter);
// console.log(r.isValid);
// const r2 = new rectangle(-10, 20);
// console.log(r.isValid);
// const c = new square(10);
// console.log(c.perimeter);
// console.log(c.isBiggerThan(r));

// Exercie 2 : Dans cet exercice on cherche à gérer une bibliothèque de livres. On commencera par créer une class livre avec construction de l'objet avec un titre et un nombre de page). On aura ensuite plusieurs propriétés / méthodes utiles.
// page, renverra la page courante du livre (1 par défaut)
// nextPage(), permet de tourner la page et incrémentera la page courante
// close(), permet de fermer un livre (revenir à la 1ère page)
// Ensuite on créera une class Library pour organiser nos livres.
// addBook(), permet de rajouter un livre à la bibliothèque
// addBooks([]), permet de rajouter plusieurs livres d'un coup (on lui passera un tableau)
// findBooksByLetter('s'), permet de lister tous les livres qui ont un titre qui commence par la lettre indiquée
class Book {
  #page = 1;

  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  get page() {
    return this.#page;
  }
  nextPage() {
    if (this.#page < this.pages) {
      this.#page++;
    }
  }

  close() {
    this.#page = 1;
  }
}

class Library {
  #books = [];

  addBook(book) {
    this.#books.push(book);
  }

  addBooks(books) {
    books.forEach(this.addBook, this);
  }

  findBooksByLetter(letter) {
    return this.#books.filter(
      (book) => book.title[0].toLowerCase() === letter.toLowerCase()
    );
  }
}

const b = new Book("Seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
l.addBooks([
  new Book("Ready player one", 100),
  new Book("Oui-oui", 10),
  new Book("Sillage", 50),
]);
console.log(l.findBooksByLetter("S"));
