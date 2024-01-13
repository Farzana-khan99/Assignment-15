// FUNCTIONS, SWITCH
// STATEMENTS, WHILE... DO-
// WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function customFun(a, b) {
  let power = Math.pow(a, b);
  // Or
  // let power = a**b
  return power;
}
let ouput = customFun(2, 7);
console.log(ouput);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

let FindLeapYear = 2024;
if (FindLeapYear % 4 === 0) {
  if (FindLeapYear % 100 === 0)
    if (FindLeapYear % 400 === 0) {
      console.log("This is leap year");
    }
  console.log("this is leap year");
} else {
  console.log("This not leap year");
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function triangle(a, b, c) {
  return (a + b + c) / 2;
}
function area(a, b, c) {
  var S = triangle(a, b, c);
  let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  return area;
}
let calculation = area(4, 8, 10);

console.log(calculation);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function average(sub1, sub2, sub3) {
  return (sub1 + sub2 + sub3) / 3;
}
function percentage(obtMarks, TotalMarks) {
  return (obtMarks / TotalMarks) * 100;
}

function mainFun(sub1, sub2, sub3) {
  let obtMarks = sub1 + sub2 + sub3;
  let TotalMarks = 100 * 3;
  let averageMarks = average(sub1, sub2, sub3);
  let MarksPercentage = percentage(obtMarks, TotalMarks);

  console.log(averageMarks.toFixed(1));
  console.log(MarksPercentage.toFixed(2) + "%");
}
mainFun(50, 70, 80);

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function characterIndex(Char, searchWord) {
  for (let i = 0; i < Char.length; i++) {
    // console.log(Char[i])
    if (Char[i] === searchWord) {
      return i;
    }
  }
  return -1;
}

let word = "hello world";
let letter = "m";

let indexWord = characterIndex(word, letter);
if (indexWord !== -1) {
  console.log(`${indexWord} word is found`);
} else {
  console.log(`${indexWord} word is not found`);
}

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function vowels(sentence){
//   let word = sentence.
// }

let str = "This is a sample sentence with vowels"
let words = /[aeiou]/gi;

console.log(`${str.match(words).length}`)
// console.log(word)

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
