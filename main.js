var odd = [ "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5", "1", "3", "5" ];
var even = [ "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6", "2", "4", "6" ];
var neither = [ "7", "8", "9", "Alpha", "Beta", "Gamma", "7", "8", "Alpha", "Beta", "Gamma", "Switch" ];

// Generate a new list of moves
function generateNewMove() {

  // Declare some variables
  var strokes = "";
  var lastStroke = "";
  var newStroke = "";
  // Get the length
  var length = parseInt(document.getElementById("length").value);

  // Generate a new number (based on parameters) for the length
  for (var i = 0; i < length; i++) {
    while (lastStroke == newStroke) {
      // Check if the last stroke was even
      if (even.includes(lastStroke)) {
        var sel =  Math.floor(Math.random() * (odd.length + neither.length));
        newStroke = sel < odd.length ? odd[sel] : neither[sel - odd.length];
      }
      else {
        var sel =  Math.floor(Math.random() * (even.length + neither.length));
        newStroke = sel < even.length ? even[sel] : neither[sel - even.length];
      }
    }
    // Set the last stroke
    lastStroke = newStroke;
    // Add the stroke to the list
  	strokes = strokes.concat(" ", newStroke);
  }
  // Output the strokes
  document.getElementById("numberDiv").innerHTML = "";
  document.getElementById("numberDiv").innerHTML = strokes;
}
