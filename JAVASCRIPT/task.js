/* Create a program that performs arithmetic operations on two numbers. */

// {

//     let a = 50
//     let b = 100

//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
//     console.log(a % b);
//     console.log(a ** b);

// }

// /* Use compound assignment operators to update variables. */

// {

//     let a = 50
//     let b = 100

//     console.log(a += b);
//     console.log(a -= b);
//     console.log(a *= b);
//     console.log(a /= b);
//     console.log(a %= b);

// }

// /* Compare two numbers and display the result. */

// {

//     let a = 50;
//     let b = 100;

//     let c = a == b;
//     console.log(c); // false
//     let cc = a != b;
//     console.log(cc); // true
//     let ccc = a === b;
//     console.log(ccc); // false
//     let cccc = a !== b;
//     console.log(cccc); // true
//     let ccccc = a > b;
//     console.log(ccccc); // false
//     let cccccc = a >= b;
//     console.log(cccccc); // false
//     let ccccccc = a < b;
//     console.log(ccccccc); // true
//     let cccccccc = a <= b;
//     console.log(cccccccc); // true

// }

// /* Use the ternary operator to check a condition. */

// {

//     let text = true;

//     let Object = text ? "SkillQode" : "Development";

//     console.log(Object);

// }

// /* Compare two strings and display the result. */

// {

//     let a = "Skill";
//     let b = "Qode";

//     let c = a == b;
//     console.log(c);
//     let cc = a != b;
//     console.log(cc);
//     let ccc = a === b;
//     console.log(ccc);
//     let cccc = a !== b;
//     console.log(cccc);
//     let ccccc = a > b;
//     console.log(ccccc);
//     let cccccc = a >= b;
//     console.log(cccccc);
//     let ccccccc = a < b;
//     console.log(ccccccc);
//     let cccccccc = a <= b;
//     console.log(cccccccc);

// }



/* Nested Statement / Switch Statement */

/*  eligible to vote. */

{
    b = prompt();
    console.log("age", b);

    // let b = 9
    if (b >= 1 && b <= 10) {
        console.log("YOU ARE CHILD");
    }
    else if (b >= 11 && b <= 17) {
        console.log("YOU ARE STUDENT");
    }

    else if (b >= 18) {
        console.log(" YOU ARE ELIGIBLE FOR VOTE ");
    }
}

/* positive, negative, or zero. */

// {
//     let number = 10;

//     if (number > 0) {
//         console.log(" POSITIVE ");
//     }
//     else if (number == 0) {
//         console.log(" 0");
//     }
//     else {
//         console.log(" NEGATIVE ");
//     }
// }

/* largest of three numbers */

// {
//     let a = 10;
//     let b = 20;
//     let c = 30;

//     if (a >= b && a >= c) {
//         console.log("LARGEST A")
//     }
//     else if (b >= a && b >= c) {
//         console.log("LARGEST B")
//     }
//     else {
//         console.log("LARGEST C")
//     }
// }

/*  leap year. */

// {
//     let year = 2000;

//     if (year % 400 == 0) {
//         console.log(" LEAP YEAR ");
//     }
//     else if (year % 100 == 0) {
//         console.log(" NOT LEAP YEAR");
//     }
//     else if (year % 4 == 0) {
//         console.log(" LEAP YEAR ");
//     }
//     else {
//         console.log(" NOT LEAP YEAR ");
//     }
// }

/* Determine the grade based on a score. */

// {
//     marks = prompt();
//     console.log("Your Marks is", marks);
//     // let marks = 60;

//     if (marks >= 40 && marks < 50) {
//         console.log("GRADE :F");
//     }
//     else if (marks >= 50 && marks < 60) {
//         console.log("GRADE : E");
//     }
//     else if (marks >= 60 && marks < 70) {
//         console.log("GRADE : D");
//     }
//     else if (marks >= 70 && marks < 80) {
//         console.log("GRADE : C");
//     }
//     else if (marks >= 80 && marks < 90) {
//         console.log("GRADE : B");
//     }
//     else if (marks >= 90 && marks < 100) {
//         console.log("GRADE : A");
//     }
//     else {
//         console.log("FAIL");
//     }
// }



// NEW TASKS OF JAVASCRIPT //

/* 1. Display Alert in JavaScript */

let Name = "DHRUVIN";

alert("HELLO, " + Name);

/* 5. Use keypress In JavaScript to Display Alerts */

document.onkeydown = function (event) {
    let charCode = event.which || event.keycode;
     if ((charCode >= 65 && charCode <=90)||(charCode >= 48 && charCode <= 57)) {
        alert('You Pressed: ' + String.fromCharCode(charCode));
      } else if (charCode ==  32) {
         alert('Space is pressed');
      }
};

/* 13. Retrieve Today’s Date in JavaScript */

let date = new Date()

console.log(date);

/* 14. Reverse array javascript */

let arr = [10, 20, 30]

let arr1 = arr.reverse()

console.log(arr1);

/* 15. JavaScript concate or merge two Arrays */
                                                                                                                                                                                                                
let a1 = [1, 2];
let b1 = [3, 4];

let c1 = a1.concat(b1);

console.log(c1);

/* 16. Reverse String in JavaScript */

let str = ["HELLO", "FRIENDS"]

let reverseStr = str.reverse()

console.log(reverseStr);

/* 18. if else statement in JavaScript */

if (5 > 10) {
    console.log("This is an incorrect condition")
} else {
   console.log("Correct Condition!");
}

/* 19. Insert element in array javascript */

let array = ['Javascript', false, undefined]

array.push("TailwindCss")

array.push("Sass")

array.unshift("Html")

array.unshift("Reactjs")

console.log(array);

