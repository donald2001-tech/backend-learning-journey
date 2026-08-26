let cart = {
    customerName: "Donald",
    items: ["Milk", "Bread", "Eggs", "Rice"],
    itemPrices: [2.50, 1.50, 3.00, 4.00],
    hasDiscount: true
};

function cartSummary(cart) {
    console.log(cart.customerName + "'s " + "cart contains: " + cart.items[0] + ", " + cart.items[1] + ", " + cart.items[2] + ", " + cart.items[3]);
};

function totalCost(cart) {
    return cart.itemPrices[0] + cart.itemPrices[1] + cart.itemPrices[2] + cart.itemPrices[3];
};

function averageItemPrice(cart) {
    return totalCost(cart) / cart.items.length;
};

cartSummary(cart);
totalCost(cart);
averageItemPrice(cart);

console.log("Total cost: Le" + totalCost(cart));
console.log("Average item price: Le" + averageItemPrice(cart));