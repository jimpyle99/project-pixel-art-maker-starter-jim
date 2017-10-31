// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var row,col,container,n,m, changeColor;

row = ('#input_height');
col = ('#input_width');
container = ('table','#pixel_canvas');
makeGird = ('#pixel_canvas');

function makeGrid(rows,cols) {
  for (let row = 0; row < rows; row++){
      let tr = table.insertRow();
      for (let col = 0; col < cols; col++){
        let cl = tr.insertCell();
        cl.addEventListener('click', fillColor);
      }
  }
}
