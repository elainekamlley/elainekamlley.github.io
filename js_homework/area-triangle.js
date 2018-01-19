var x = 5;
var y = 6;
var z = 7;

var perimeter = (x + y + z)/2;

var area = Math.sqrt(perimeter*((perimeter-x)*(perimeter-y)*(perimeter-z)));

console.log(area);
