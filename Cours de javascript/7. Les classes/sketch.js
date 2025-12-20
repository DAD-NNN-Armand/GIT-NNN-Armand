const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};

class Student {
  ecole = "Jules Ferry";
  #notes = [];

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // setNotes(notes) {
  //   this.notes = notes;
  // }
  // la fonction set permet
  set notes(v) {
    if (Array.isArray(v)) {
      this.#notes = v;
    }
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  get notes() {
    console.log(this.#notes);
  }

  canPass() {
    return moyenne(this.#notes) >= Student.moyenne;
  }

  static moyenne = 10;

  // static hello() {
  //   console.log("Bonjour");
  // }
}

class SuperStudent extends Student {
  _notes = [];

  constructor(firstname, lastname, notes) {
    super(firstname, lastname);
    this._notes = notes;
  }

  get name() {
    return "Super" + super.name;
  }

  // get notes() {
  //   console.log(this.#notes);
  // }

  canPass() {
    return super.canPass();
  }
}

const John = new SuperStudent("John", "Doe");
const Jane = new Student("Jane", "Doe");
John.notes = [0, 0, 9];
Jane.notes = [15, 18, 19];
console.log(John.name);
// console.log(John.canPass(), Jane.canPass());
