// Select color input
// 3Select size input

// When size is submitted by the user, call gridForm()
let gridForm = document.querySelector('#size-picker');
// When color is submitted by the user, call (selectedColor)
let selectedColor = document.querySelector('#color-picker');

gridForm.addEventListener("submit", populateGrid);

//clearTable will make sure grid is clear before drawing it
function clearTable(table) {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

//colorCell will change cell background with the selectedColor or will make the background white if it already has a selectedColor
function colorCell(evt) {
  let style = evt.srcElement.style;
  if (!style.backgroundColor) {
    style.backgroundColor = selectedColor.value;
  } else {
    style.backgroundColor = "";
  }
}

//populateGrid makes inputWidth and inputHeight intigers
function populateGrid(evt) {
  let row, col, pixelCanvas, inputWidth, inputHeight;

  pixelCanvas = document.querySelector('#pixel-canvas');
  inputWidth = document.querySelector('#input-width').value;
  inputHeight = document.querySelector('#input-height').value;
  inputWidth = parseInt(inputWidth);
  inputHeight = parseInt(inputHeight);

//prevents the default behavior of the submit button from resetting the page
  evt.preventDefault();

//clearTable makes sure the grid is blank to prevent adding tr and td to existing grids
  clearTable(pixelCanvas);

//loop that appends tr(row) and td(height) to pixelCanvas table
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
