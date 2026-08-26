// Looping through numbers from 0 to 5
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Looping through an array of fruits
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let scores = [90, 75, 60, 40];

// Looping through an array of scores and logging the grade based on the score
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        console.log(scores[i] + " - Grade: A");
    } else if (scores[i] >= 75) {
        console.log(scores[i] + " - Grade: B");
    } else if (scores[i] >= 60) {
        console.log(scores[i] + " - Grade: C");
    } else {
        console.log(scores[i] + " - Grade: F");
    }
}