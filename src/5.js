// Create an array of names
const names = ['John', 'Jane', 'Bob', 'Alice'];

// Return a random name from the array
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

// Print the result of the function to the console
console.log(getRandomName());
