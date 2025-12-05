let newImagePositionX = 0,
  newImagePositionY = 0,
  imagePositionX = localStorage.getItem("startX"),
  imagePositionY = localStorage.getItem("startY"),
  mouseOffsetX = 0,
  mouseOffsetY = 0;

const card = document.getElementsByClassName("card")[0];

// repositionne le sketch à sa position sauvegardé
card.style.top = imagePositionY;
card.style.left = imagePositionX;

card.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);

function mouseDown(e) {
  let mousePositionX = e.clientX;
  let mousePositionY = e.clientY;
  document.addEventListener("mousemove", mouseMove);

  imagePositionX = card.offsetLeft;
  imagePositionY = card.offsetTop;
  
  mouseOffsetX = imagePositionX - mousePositionX;
  mouseOffsetY = imagePositionY - mousePositionY;
}

function mouseMove(e) {
  let mousePositionX = e.clientX;
  let mousePositionY = e.clientY;

  let newImagePositionX = mousePositionX + mouseOffsetX;
  let newImagePositionY = mousePositionY + mouseOffsetY;

  card.style.top = newImagePositionY + "px";
  
  if (newImagePositionX + card.offsetWidth < document.body.offsetWidth) {
    card.style.left =  newImagePositionX + "px";
  }
}

function mouseUp() {
  document.removeEventListener("mousemove", mouseMove);

  // save data
  localStorage.setItem("startX", card.style.left);
  localStorage.setItem("startY", card.style.top);
}
