// ===============================
// Section 1 — Variables & Assignment
// ===============================

// 1 & 2
let myName = "Abinaya";
let myAge = 19;
let isStudent = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

// 3. Swap without third variable
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("After swap: a =", a, "b =", b);

// 4. What will be printed?
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x); // 10 (because y is a copy, not reference)

// 5. Rewrite using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);

// ===============================
// Section 2 — Operators
// ===============================

// 6. Arithmetic operations
let num1 = 20;
let num2 = 6;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7. Predict output
console.log(5 + "5");   // "55" (string concatenation)
console.log(5 - "2");   // 3 (string converted to number)
console.log(true + 1);  // 2 (true becomes 1)

// 8. Number comparison
let number = 100;

if (number > 100) {
    console.log("Greater than 100");
} else if (number === 100) {
    console.log("Equal to 100");
} else {
    console.log("Less than 100");
}

// 9. Difference between == and ===
console.log(5 == "5");   // true (value only)
console.log(5 === "5");  // false (value + type)

// 10. Logical operators (Age eligibility)
let age = 30;

if (age >= 18 && age <= 60) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}

// ===============================
// Section 3 — Control Statements
// ===============================

// 11. Even or Odd
let checkNum = 7;

if (checkNum % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 12. FizzBuzz
let fizzNum = 15;

if (fizzNum % 3 === 0 && fizzNum % 5 === 0) {
    console.log("FizzBuzz");
} else if (fizzNum % 3 === 0) {
    console.log("Fizz");
} else if (fizzNum % 5 === 0) {
    console.log("Buzz");
}

// 13. Switch weekday
let day = 3;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

// 14. For loop 1–20
for (let i = 1; i <= 20; i++) {
    console.log("Number:", i);
}

// Print even numbers only
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

// 15. While loop sum 1 to N
let N = 10;
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}

console.log("Sum from 1 to", N, "=", sum);

// 16. Break and Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log("Loop:", i);
}

// ===============================
// Section 4 — Functions
// ===============================

// 17. Function sum
function addNumbers(n1, n2) {
    return n1 + n2;
}

console.log("Function Sum:", addNumbers(5, 7));

// 18. Arrow function
const addArrow = (n1, n2) => n1 + n2;
console.log("Arrow Sum:", addArrow(10, 15));

// 19. Prime check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Is 11 prime?", isPrime(11));

// 20. Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reversed:", reverseString("hello"));

// 21. Output explanation
function test() {
    return;
    console.log("Hello");
}
test(); // Nothing printed (code after return does not execute)

// 22. Largest number in array
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log("Largest:", findLargest([3, 7, 2, 9, 5]));

// ===============================
// Section 5 — Integrated Challenge
// ===============================

// Grade calculation function
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

// Program execution
let studentName = "Alice";
let studentMarks = 82;

let grade = calculateGrade(studentMarks);

console.log("Student:", studentName);
console.log("Marks:", studentMarks);
console.log("Grade:", grade);
