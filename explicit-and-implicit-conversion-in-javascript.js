/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // using the Number() function here allows me to convert the string into an integer value to perform arithmetic.
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // again, using the Number() function on age changes the string value into an integer so that simple addition can occur. 
console.log("Total Age: " + totalAge);

let nombre = "Joshua"
let outcome = " passed this selfpace"
let time = 4
let duration = " weeks."
console.log(nombre + outcome + " in " + time + duration);

let lady = null
console.log(Boolean(lady)) // because the variable lady is valued at null, the console of the Boolean(lady) is going to output false (which is what I have).