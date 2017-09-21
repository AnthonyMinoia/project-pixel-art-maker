// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	// Your code goes here!
	let heightNew = $('#input_height').val();
	let widthNew = $('#input_width').val();

	let pixelCanvas = $('#pixel_canvas');

	while (pixelCanvas.children().length>0) {
		while(pixelCanvas.children().first().children().length>0) {
			pixelCanvas.children().first().children().remove();
		};
		pixelCanvas.children().first().remove();
	};

	for (let i=0; i<heightNew; i++) {
		pixelCanvas.append('<tr></tr>');
	};

	pixelCanvas.children('tr').each(function() {
		for (let j=0;j<widthNew;j++) {
			$(this).append('<td class="cell"></td>');
		}
	});

	$('.cell').click( function(evt) {
    let currentColor = $('#colorPicker').val();
    $( evt.target ).css( 'background', currentColor );
    });

	return false;
};

$('#submit_button').click(makeGrid);

