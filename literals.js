
//temperate literals
let name = "Donald";
let age = 29;
console.log(`${name} is ${age} years old`);

//exercise
let employee = {
    fName: "Hannah",
    role: "HR",
    salary: 5000
};

let {fName, role, salary} = employee;

function formatSalary(salary) {
    return(`$${salary}`);
};

console.log(`${fName} is a Backend Developer earning ${formatSalary(salary)}`)

//exercise 2

let product ={
    pName: "Bicycle",
    price: 800,
    category: "A"
};
let {pName, price} = product;

const applyDiscount = (price, discountPercent) => {
    return price - (price * discountPercent / 100);
};

let updatedProduct = {...product, price: applyDiscount(price, 20)};
console.log(`${updatedProduct.pName} now costs ${updatedProduct.price} after discount`);


//Exercise 3

let order = {
    customerName: "Benjamin",
    itemName: "Solar panels",
    quantity: 10,
    unitPrice: 1000
};

let {customerName, itemName} = order;

const calculatedTotal = (quantity, unitPrice) => {
    return quantity * unitPrice;
};

let receipt = {...order, total: calculatedTotal(order.quantity, order.unitPrice)};

console.log(`${receipt.customerName} ordered ${receipt.quantity} ${receipt.itemName} for a total of ${receipt.total}`);

//exercise 4
let movie = {
    title: "Outer Banks",
    director: "Donald Sonnah",
    ratings: [8, 9, 7, 10]
};

let {title, director} = movie;

const averageRating = (ratings) => {
    return (ratings[0] + ratings[1] + ratings[2] + ratings[3]) / ratings.length;
};

let movieSummary = {...movie, avgRating: averageRating(movie.ratings)};

console.log(`${title} directed by ${director} - Average Rating: ${movieSummary.avgRating}`);