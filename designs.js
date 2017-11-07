// Select color input
// 3Select size input

// When size is submitted by the user, call makeGrid()
let gridForm = document.querySelector('#size-picker');
let selectedColor = document.querySelector('#color-picker');

gridForm.addEventListener("submit", populateGrid);

function clearTable(table) {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

function colorCell(evt) {
  let style = evt.srcElement.style;
  if (!style.backgroundColor) {
    style.backgroundColor = selectedColor.value;
  } else {
    style.backgroundColor = "";
  }
}

function populateGrid(evt) {
  let row, col, pixelCanvas, inputWidth, inputHeight;

  pixelCanvas = document.querySelector('#pixel-canvas');
  inputWidth = document.querySelector('#input-width').value;
  inputHeight = document.querySelector('#input-height').value;
  inputWidth = parseInt(inputWidth);
  inputHeight = parseInt(inputHeight);

  evt.preventDefault();

  clearTable(pixelCanvas);

  for (row = 0; row < inputHeight; row++) {
    let tr = document.createElement("tr");

    for (col = 0; col < inputWidth; col++) {
      let td = document.createElement("td");
      td.addEventListener("click", colorCell);
      tr.appendChild(td);
    }
    pixelCanvas.appendChild(tr);
  }
}
