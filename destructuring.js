//destructuring objects
let person = { name: "Donald", age: 29 };
let {name, age } = person;

console.log(name);
console.log(age);

let car = {brand: "Toyota", year: 2020, color: "blue"};
let {brand, color} = car;

console.log(brand);
console.log(color);

//destructuring arrays
let colors = ["red", "green", "blue"];
let [first, second] = colors;

console.log(first);
console.log(second);

//spread and rest oprators
let nums1 = [1, 2, 3];
let nums2 = [...nums1, 4, 5];

console.log(nums2);

let baseInfo = { name: "Donald", age: 29};
let fullInfo = { ...baseInfo, city: "Lagos"};
console.log(fullInfo);

