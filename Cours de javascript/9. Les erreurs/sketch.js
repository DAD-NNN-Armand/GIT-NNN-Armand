class rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        "Impossible d'avoir une forme géométrique avec des formes négatives"
      );
    }
    this.width = width;
    this.height = height;
  }

  get perimeter() {
    return this.width + this.height;
  }

  get isValid() {
    return this.width > 0 && this.height;
  }

  isBiggerThan(shape) {
    return this.perimeter > shape.perimeter;
  }
}

class Square extends rectangle {
  constructor(width) {
    super(width, width);
  }
}

class PromptError extends Error {
  constructor() {}
}

function promptRectangle() {
  try {
    const width = parseInt(prompt("largeur"), 10);
    const height = parseInt(prompt("largeur"), 10);
    const r = new rectangle(width, height);
    return r;
  } catch (e) {
    throw new PromptError("Entrée utilisateur invalide", {
      cause: { code: 404, url: "https//" },
    });
  }
}

try {
  promptRectangle();
} catch (e) {
  if (e instanceof PromptError) {
    console.log("PromptError");
  } else {
    console.log("erreur classique");
  }
}
