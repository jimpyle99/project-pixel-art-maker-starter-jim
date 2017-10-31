// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var row,col,container,n,m, changeColor;

row = ('#height');
col = ('#width');
container = ('table','#pixel_canvas');
makeGird = ('#pixel_canvas');

function makeGrid(row,col) {
  for (var n = 0; n < row; n++){
      for (var m = 0; m < col; m++){
        unit.appendTo('parent');
    }
  }
}

$(input).on('click',function changeColor()){
  toggle.used.color.on.grid;
})
