const scrollWrap = document.getElementById("scrollWrap");
const contentInner = document.getElementById("contentInner");
const contentScaled = document.getElementById("contentScaled");

// Paramètres
let scale = 1;
const minScale = 0.25;
const maxScale = 4;
const zoomIntensity = 0.0018;

// Mesures originales (au scale = 1)
const originalRect = contentScaled.getBoundingClientRect();
const originalWidth = Math.max(1, Math.round(originalRect.width));
const originalHeight = Math.max(1, Math.round(originalRect.height));

// Fonctions d’update
function updateContentInnerSize() {
  contentInner.style.width = originalWidth * scale + "px";
  contentInner.style.height = originalHeight * scale + "px";
}

function updateContentTransform() {
  contentScaled.style.transform = `scale(${scale})`;
}

updateContentInnerSize();
updateContentTransform();

/* ---------- PANNING (clic + glisser) ---------- */
let isDragging = false;
let dragStartX = 0,
  dragStartY = 0;
let startScrollLeft = 0,
  startScrollTop = 0;

scrollWrap.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  if (!canPan()) return;

  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  startScrollLeft = scrollWrap.scrollLeft;
  startScrollTop = scrollWrap.scrollTop;
  scrollWrap.setPointerCapture(e.pointerId);
  scrollWrap.style.cursor = "grabbing";
  e.preventDefault();
});

scrollWrap.addEventListener("pointermove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  scrollWrap.scrollLeft = clamp(
    startScrollLeft - dx,
    0,
    scrollWrap.scrollWidth - scrollWrap.clientWidth
  );
  scrollWrap.scrollTop = clamp(
    startScrollTop - dy,
    0,
    scrollWrap.scrollHeight - scrollWrap.clientHeight
  );
});

scrollWrap.addEventListener("pointerup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  scrollWrap.releasePointerCapture(e.pointerId);
  scrollWrap.style.cursor = "grab";
});

scrollWrap.addEventListener("pointercancel", () => {
  if (!isDragging) return;
  isDragging = false;
  scrollWrap.style.cursor = "grab";
});

/* ---------- WHEEL = ZOOM ---------- */
scrollWrap.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    const delta = -e.deltaY;
    const factor = Math.exp(delta * zoomIntensity);
    const prevScale = scale;
    let newScale = prevScale * factor;
    newScale = Math.max(minScale, Math.min(maxScale, newScale));
    if (Math.abs(newScale - prevScale) < 1e-6) return;

    const rect = scrollWrap.getBoundingClientRect();
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;
    const contentX = (pointerX + scrollWrap.scrollLeft) / prevScale;
    const contentY = (pointerY + scrollWrap.scrollTop) / prevScale;

    scale = newScale;
    updateContentTransform();
    updateContentInnerSize();

    scrollWrap.scrollLeft = clamp(
      contentX * scale - pointerX,
      0,
      scrollWrap.scrollWidth - scrollWrap.clientWidth
    );
    scrollWrap.scrollTop = clamp(
      contentY * scale - pointerY,
      0,
      scrollWrap.scrollHeight - scrollWrap.clientHeight
    );

    maybeDisablePanCursor();
  },
  { passive: false }
);

/* ---------- UTILITAIRES ---------- */
function clamp(v, a, b) {
  if (Number.isNaN(v)) return a;
  return Math.max(a, Math.min(b, v));
}

function canPan() {
  return (
    contentInner.clientWidth > scrollWrap.clientWidth + 0.5 ||
    contentInner.clientHeight > scrollWrap.clientHeight + 0.5
  );
}

function maybeDisablePanCursor() {
  if (!canPan()) {
    scrollWrap.style.cursor = "default";
  } else {
    scrollWrap.style.cursor = "grab";
  }
}

maybeDisablePanCursor();

window.addEventListener("resize", () => {
  updateContentInnerSize();
  maybeDisablePanCursor();
});
