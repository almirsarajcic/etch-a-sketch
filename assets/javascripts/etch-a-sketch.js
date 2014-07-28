jQuery(function($) {
  var grid    = $('.grid'),
      squares = 128;

  function drawGrid() {
    var sqrt    = parseInt(Math.sqrt(squares));
    var rows    = 0,
        columns = 0;

    for (var i = sqrt; i >= 1; i--) {
      if (squares % i === 0) {
        rows    = i;
        columns = squares / rows;
        break;
      }
    }

    var width = grid.css('width').match(/\d+/)[0] / columns;

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        var square = $('<div class="square" data-row="' + i + '" data-column="' + j + '"></div>')
          .css('width', width)
          .css('height', width)
          .css('top', width*i)
          .css('left', width*j)
          .appendTo(grid);
      }
    }
  }

  $(document).on('mouseover', '.square', function(e) {
    $(this).css('background-color', '#000');
  });

  drawGrid();
});
