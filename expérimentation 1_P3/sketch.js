// --------------------------
// Variables globales
// --------------------------
// Position calculée pendant le drag (valeurs temporaires)
let newImagePositionX = 0,
  newImagePositionY = 0,
  // Position initiale (chargée depuis localStorage si présente)
  imagePositionX = localStorage.getItem("startX"),
  imagePositionY = localStorage.getItem("startY"),
  // Décalage entre la souris et le coin de l'image (pour drag)
  mouseOffsetX = 0,
  mouseOffsetY = 0;

// Récupère l'élément image (la "carte") dans le DOM
const card = document.getElementsByClassName("card")[0];

let zoom = 1;
const minZoom = 1;
const maxZoom = 10;

// wheel : scrolling de la molette
document.addEventListener("wheel", (molette) => {
  console.log("molette de la souris", molette.deltaY);
  // intensité du scroll
  let scrollValue = molette.deltaY * -0.01;
  // mise à jour du zoom
  zoom += scrollValue;
  // Math.min et Math.max, limites les valeurs maximales que peut prendre zoom.
  zoom = Math.min(maxZoom, Math.max(minZoom, zoom));
  console.log("taille =", zoom.toFixed(2)); //
});

// repositionne le sketch à sa position sauvegardé (si startX/startY existent)
card.style.top = imagePositionY;
card.style.left = imagePositionX;

// Démarrage du drag
card.addEventListener("mousedown", mouseDown);
// Fin du drag
document.addEventListener("mouseup", mouseUp);

// --------------------------
// mouseDown : début du drag
// --------------------------
// e : MouseEvent déclenché par mousedown
// - capture la position actuelle de la souris
// - ajoute l'écouteur mousemove pour suivre le déplacement
// - calcule le décalage entre la souris et le coin supérieur gauche de la carte
function mouseDown(e) {
  let mousePositionX = e.clientX;
  let mousePositionY = e.clientY;
  // Commence le suivi du mouvement
  document.addEventListener("mousemove", mouseMove);

  // Position actuelle de l'image (en px, offsetLeft/Top)
  imagePositionX = card.offsetLeft;
  imagePositionY = card.offsetTop;

  // Calcul du décalage pour que l'image "suive" la souris de façon fluide
  mouseOffsetX = imagePositionX - mousePositionX;
  mouseOffsetY = imagePositionY - mousePositionY;
}

// --------------------------
// mouseMove : pendant le drag
// --------------------------
// e : MouseEvent déclenché lors du déplacement de la souris
// - calcule la nouvelle position de l'image en appliquant le décalage
// - met à jour la position top (verticale) sans restriction
// - met à jour la position left (horizontale) uniquement si l'image ne dépasse pas la largeur du body
function mouseMove(e) {
  let mousePositionX = e.clientX;
  let mousePositionY = e.clientY;

  // Nouvelle position calculée en tenant compte du décalage
  let newImagePositionX = mousePositionX + mouseOffsetX;
  let newImagePositionY = mousePositionY + mouseOffsetY;

  // Contraintes horizontales
  if (
    newImagePositionX + card.offsetWidth < document.body.offsetWidth &&
    newImagePositionX > 0
  ) {
    card.style.left = newImagePositionX + "px";
  }

  // Contraintes verticales
  if (
    newImagePositionY + card.offsetHeight < document.body.offsetHeight &&
    newImagePositionY > 0
  ) {
    card.style.top = newImagePositionY + "px";
  }
  console.log("newImagePositionX", newImagePositionX);
}

function mouseUp() {
  document.removeEventListener("mousemove", mouseMove);

  // save data
  localStorage.setItem("startX", card.style.left);
  localStorage.setItem("startY", card.style.top);
}
