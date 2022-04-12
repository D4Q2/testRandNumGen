var lastStroke = 0;
var strokes = 'Number: ';
function generateNewNumber() {
  lastStroke += 1;
  strokes = (lastStroke.toString());
  document.getElementById("numberDiv").innerHTML = strokes;
}
