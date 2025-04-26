function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let data = [
    { id: "1", title: "Java" },
    { id: "2", title: "Python" },
    { id: "3", title: "JavaScript" },
    { id: "4", title: "C++" }
];

function displayData() {
    console.log(data);
}
