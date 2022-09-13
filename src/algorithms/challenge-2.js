function fizzBuzz(input) {
  if (input % 3 == 0 && input % 5 == 0) {
    return "fizzbuzz";
  } else if (input % 5 == 0) {
    return "buzz";
  } else if (input % 3 == 0) {
    return "fizz";
  } else {
    return "Please input a diferrent number as your previous input is not recognised by the system. Thank you!";
  }
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(50));
console.log(fizzBuzz(45));
