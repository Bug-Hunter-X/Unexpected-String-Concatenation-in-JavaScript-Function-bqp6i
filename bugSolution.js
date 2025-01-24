function foo(a, b) {
  //Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);
  return a + b;
}

console.log(foo(1, '1')); // Output: 2 (Numerical addition) 