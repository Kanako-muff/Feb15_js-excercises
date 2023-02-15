// write your solution here
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
      console.log(line);
    }
    return line + "\n";
}

function buildTriangle(length){
    makeLine(length)
}


buildTriangle(10);