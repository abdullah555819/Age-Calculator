var text = document.getElementById("birth");

function year() {
  var year = new Date(text.value);
  console.log(year);
  var current = new Date();
  var age = current.getFullYear();
  var age2 = year.getFullYear();
  var age3 = age - age2;
console.log(age3);
 var month = current.getMonth()-year.getMonth()
 console.log(month);
}

// // var text = document.getElementById("day")
// // function calculate (age){
// //       var year = new Date(text.value);
// //     console.log(year);
// //     var current = new Date();
// //     var age = current.getFullYear();
// //     var age2 = year.getFullYear();
// //     var age3 = age - age2;
// //     console.log(age3);
// //     var month = current.getMonth()-year.getMonth();
// //     console.log(month);


// //  if (age === "calculator") {
// //    age = eval(age3.value)
// //    console.log(age3.value);
// //  } else {
   
// // }
// // }