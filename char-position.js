//function find position
  //loop through string
    //output letters to object
    //update value of object with position of letter


function characterPosition(input) {
  var noSpaces = input.split(' ').join("");
  var output = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (!output[noSpaces[i]]) {
      output[noSpaces[i]] = [i];
    } else output[noSpaces[i]].push(i);
  }
  console.log(output);
}

characterPosition("lighthouse in the house");