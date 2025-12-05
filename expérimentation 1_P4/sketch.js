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
const minZoom = 0.5;
const maxZoom = 10;

// fonction qui applique le zoom à la width
function updateZoom() {
  const zoomStrength = 2;
  const scaleValue = zoomStrength * zoom;

  card.style.transform = "scale(" + scaleValue + ")";
}

function updateCardOrigin(mouseX, mouseY) {
  // coordonné de la souri relative à la card
  // convertir en %
  // appliquer le % en css

  // Récupère la position et la taille de l'élément .card dans la fenêtre
  const adaptation = card.getBoundingClientRect();

  // Calcule la position de la souris relative au coin supérieur gauche de la card
  const pointeurPositionX = mouseX - adaptation.left;
  const pointeurPositionY = mouseY - adaptation.top;

  // Convertit cette position en pourcentage de la largeur/hauteur de la card
  const originX = (pointeurPositionX / adaptation.width) * 100;
  const originY = (pointeurPositionY / adaptation.height) * 100;

  // Applique ces pourcentages comme "transform-origin" en CSS
  // Cela détermine le point pivot des transformations (scale, rotate…)
  card.style.transformOrigin = originX + "% " + originY + "%";

  // console.log("originX", originX);
  // console.log("originY", originY);
}

// wheel : scrolling de la molette
document.addEventListener("wheel", (e) => {
  e.preventDefault();
  // console.log("molette de la souris", e.deltaY);
  // intensité du scroll
  let scrollValue = e.deltaY * -0.001;
  // mise à jour du zoom
  zoom += scrollValue;
  // Math.min et Math.max, limites les valeurs maximales que peut prendre zoom.
  // console.log(zoom);
  zoom = Math.min(maxZoom, Math.max(minZoom, zoom));
  updateCardOrigin(e.clientX, e.clientY);
  updateZoom();
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
  console.log(card.getBoundingClientRect().width);
  let mousePositionX = e.clientX;
  let mousePositionY = e.clientY;

  // Nouvelle position calculée en tenant compte du décalage
  let newImagePositionX = mousePositionX + mouseOffsetX;
  let newImagePositionY = mousePositionY + mouseOffsetY;

  if (
    card.getBoundingClientRect().width >
      document.body.getBoundingClientRect().width ||
    card.getBoundingClientRect().height >
      document.body.getBoundingClientRect().height
  ) {
    card.style.left = newImagePositionX + "px";
    card.style.top = newImagePositionY + "px";
  } else {
    // Contraintes horizontales
    if (
      newImagePositionX + card.getBoundingClientRect().width <
        document.body.getBoundingClientRect().width &&
      newImagePositionX > 0
    ) {
      card.style.left = newImagePositionX + "px";
    }

    // Contraintes verticales
    if (
      newImagePositionY + card.getBoundingClientRect().height <
        document.body.getBoundingClientRect().height &&
      newImagePositionY > 0
    ) {
      card.style.top = newImagePositionY + "px";
    }
    // console.log("newImagePositionX", newImagePositionX);
  }
}

function mouseUp() {
  document.removeEventListener("mousemove", mouseMove);

  // save data
  localStorage.setItem("startX", card.style.left);
  localStorage.setItem("startY", card.style.top);
}

// document.addEventListener("wheel", (molette) => {
//   console.log("molette de la souris", molette.deltaY);
//   let scrollValue = molette.deltaY * -0.001;
//   zoom += scrollValue;
//   zoom = Math.min(maxZoom, Math.max(minZoom, zoom));
//   updateCardOrigin(e.clientX, e.clientY); //?
//   updateZoom();
// });
