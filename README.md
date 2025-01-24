# Unexpected String Concatenation in JavaScript Function
This repository demonstrates an uncommon JavaScript bug related to type coercion during addition. The function `foo` is expected to perform numerical addition, but instead performs string concatenation due to the implicit type conversion of the number to a string. 

## Bug Description
The function `foo` takes two arguments, `a` and `b`. When one of the arguments is a string and the other is a number, the '+' operator performs string concatenation instead of numerical addition. This behavior is due to JavaScript's dynamic typing and loose type coercion.

## How to reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or any JavaScript runtime) to observe the unexpected output.

## Solution
The solution involves explicitly converting the arguments to numbers using `parseInt` or `Number` before performing the addition. This ensures that the operation performs numerical addition instead of string concatenation.

## Additional information
This bug highlights the importance of understanding JavaScript's type coercion rules and the potential pitfalls of implicit type conversion. It's good practice to perform explicit type checking and conversion when dealing with potentially mixed data types to avoid unexpected behavior. 