let employees = [
    { name: "Donald", salesAmount: 500 },
    { name: "Hannah", salesAmount: 1000 },
    { name: "Sarah", salesAmount: 750 },
    {name: "Ben", salesAmount: 300 }
];

function getBonus(salesAmount) {
    if (salesAmount >= 1000) {
        return 200;
    } else if (salesAmount >= 500) {
        return 100;
    } else {
        return 0;
    }
}

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let bonus = getBonus(employee.salesAmount);
    console.log(employee.name + " has a sales amount of " + employee.salesAmount + " and receives a bonus of " + bonus);
}

let inventory = [
    { itemName: "Laptop", quantity: 15, price: 2000 },
    { itemName: "Phone", quantity: 30, price: 800 },
    { itemName: "Tablet", quantity: 20, price: 1200 },
    { itemName: "Monitor", quantity: 25, price: 300 },
    { itemName: "Keyboard", quantity: 50, price: 100}
    
];

function getStockStatus(quantity) {
    if (quantity === 0) {
        return "Out of Stock";
    } else if (quantity < 10) {
        return "Low Stock";
    } else {
        return "In Stock";
    }
    }
    
function itemValue(quantity, price) {
    return quantity * price;

    for (let i =0 ; i < inventory.length; i++) {
        console.log(inventory[i].itemName + " - Stock Status: " + getStockStatus(inventory[i].quantity) + ", Total Value: $" + itemValue(inventory[i].quantity, inventory[i].price));
    }
}