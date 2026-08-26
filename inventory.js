let inventory = [
    {itemName: "Laptop", quantity: 10, price: 3000},
    {itemName: "Bicycle", quantity: 5, price: 5000},
    {itemName: "iPhone", quantity: 0, price: 500},
    {itemName: "Nintendo", quantity: 2, price: 300},
    {itemName: "PS5", quantity: 20, price: 700}
];

function getStockStatus(quantity) {
    if (quantity === 0){
        return("Out of Stock")
    } else if (quantity < 10) {
        return("Low Stok")
    } else
        return("In Stock")
};

function itemValue(item) {
    return item.quantity * item.price;
};

let totalInventory = 0;
for( let i = 0; i < inventory.length; i++) {
    let item = inventory[i];

    let status = getStockStatus(item.quantity);
    let value = itemValue(item);
    console.log(item.itemName + " - Status: " + status + " - Total Value: " + value);
    totalInventory = totalInventory + value;
};

console.log("Total Inventory Value: " + totalInventory);
