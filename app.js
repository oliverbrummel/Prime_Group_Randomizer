
$(function(){

// all the students

  var students = ["Sasha", "Amy", "Cari", "Chris T", 
  "Chris R", "Courtney", "Erika", "Jennifer", "Jessica",
   "Kyle", "Libby", "Lisa", "Max", "Oliver", "Peter",
    "Russel", "Suzanna", "Taylor", "Travis"];


  var numGroups = 0;

  $("#button2").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 2;
    console.log(numGroups);
  })

$("#button3").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 3;
    console.log(numGroups);
  })

$("#button4").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 4;
    console.log(numGroups);
  })

$("#button5").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 5;
    console.log(numGroups);
  })

$("#button6").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 6;
    console.log(numGroups);
  })

$("#button7").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 7;
    console.log(numGroups);
  })

$("#button8").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 8;
    console.log(numGroups);
  })

$("#button9").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 9;
    console.log(numGroups);
  })

$("#button10").on("click", function(){
    $(this).css("background-color", "red");
    numGroups = 10;
    console.log(numGroups);
  })

$("#randomizeGroups").on("click", function(){
  $(this).css("background-color", "blue");
  // remove the color on the selected button
// })
   
})

// $(".displayGroupNames").append("<ul>Team#+([i]+1)</ul>").toString

// Determining number of groups

// for(var i = 0; i <= numGroups.length; i ++) {
//     $(".group" + ([i] + 1).toString())
// }


// Populating groups from the students array

for(var i = 0; i < students.length; i ++) {

}

// This randomizes the contents of the array
function shuffle (array) {
  var i = 0;
      j = 0;
      temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

console.log(shuffle(students));
});

// function totalGroupNumber(){
//   switch(result) {
//     case 2:
//     groupNumber = 2;
//     break;
//     case 3:
//     groupNuber = 3;
//     break;
//     case 4:
//     groupNuber = 4;
//     break;
//     case 5:
//     groupNuber = 5;
//     break;
//     case 6:
//     groupNuber = 6;
//     break;
//     case 7:
//     groupNuber = 7;
//     break;
//     case 8:
//     groupNuber = 8;
//     break;
//     case 9:
//     groupNuber = 9;
//     break;
//     case 10:
//     groupNuber = 10;
//     break;

  // }
// }