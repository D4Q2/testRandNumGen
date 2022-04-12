var odd = [ 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5 ]
var even = [ 2, 4, 6, 2, 4, 6, 2, 4, 6, 2, 4, 6, 2, 4, 6, 2, 4, 6, 2, 4, 6, 2, 4, 6 ]
var neither = [ 7, 7, 8, 8, 9 ]
function generateNewNumber() {
  // Declare some variables
  var strokes = "";
  var lastStroke = 1;
  var newStroke = 1;
  // Get the length
  var length = parseInt(document.getElementById("length").value);
 
  // Generate a new number based on parameters for the length
  for (var i = 0; i < length; i++) {
    while (lastStroke == newStroke) {
      // Check if the number is even
      if (lastStroke % 2 == 0) {
        var sel =  Math.floor(Math.random() * (odd.length + neither.length));
        newStroke = sel < odd.length ? odd[sel] : neither[sel - even.length];
      }
      else {
        var sel =  Math.floor(Math.random() * (even.length + neither.length));
        newStroke = sel < even.length ? even[sel] : neither[sel - even.length];
      }
    }
    
    lastStroke = newStroke;
  	strokes = strokes.concat(" ", newStroke.toString());
  }
  document.getElementById("numberDiv").innerHTML = strokes;
}
