const deliverOrder = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve("Pizza")
    }, 0);
});

deliverOrder.then((name) =>
{
    console.log("Delivered: Pizza")
});

console.log("Order placed, waiting for delivery...");

