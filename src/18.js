function get_random_number(min=1, max=10) {
  const random_number = Math.floor(Math.random() * (max - min + 1)) + min;
  return random_number;
}
console.log(get_random_number()); // Output: a randomly generated number between 1 and 10.
