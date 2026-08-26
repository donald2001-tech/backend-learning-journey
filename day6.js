const deliverPizza = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve("Pizza")
    }, 2000);
});

const deliverDrink = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve("Soda")
    }, 500);
});

deliverPizza.then((name) =>
{
    console.log("Delivered: Pizzaa")
});

deliverDrink.then((name) =>
{
    console.log("Delivered: Soda")
});

console.log("Both others placed...");