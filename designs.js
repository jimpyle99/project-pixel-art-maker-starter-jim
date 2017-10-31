// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var row,col,container,n,m, changeColor;

container = ('table','#pixel_canvas');
makeGird = ('#pixel_canvas');

$('#input_height','#input_width').submit(function makeGrid(rows,cols) {
  for (let row = 0; row < rows; row++){
      let tr = table.insertRow();
      for (let col = 0; col < cols; col++){
        let cl = tr.insertCell();
        cl.addEventListener('click', fillColor);
      }
  }
})
