function logProduct(product) {
    if (typeof product === 'string') {
        console.error("Error: ".concat(product));
    }
    else {
        console.log("ID: ".concat(product.id, ", Name: ").concat(product.name, ", Price: $").concat(product.price, ", In Stock: ").concat(product.inStock));
    }
}
logProduct("Product not found");
logProduct({ id: 1, name: "Laptop", price: 999.99, inStock: true });
function wrapValue(value) {
    return [value];
}
console.log(wrapValue([42, 4, 3, "hello"]));
var result = {
    data: { id: 1, name: "Laptop", price: 999.99, inStock: true },
    success: true,
    message: "Product retrieved successfully"
};
console.log(result);
var res = {
    data: "Product not found",
    success: false,
    message: "Error retrieving product"
};
console.log(res);
function processApiResult(result) {
    if (result.success) {
        console.log("Data:", result.data);
    }
    else {
        console.error("Error:", result.message);
    }
}
processApiResult(result);
processApiResult(res);
