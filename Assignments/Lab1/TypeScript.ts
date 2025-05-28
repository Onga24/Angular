interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

type ProductOrError = Product | string ;

function logProduct(product: ProductOrError): void {
    if(typeof product === 'string') {
        console.error(`Error: ${product}`);
    }
    else{
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, In Stock: ${product.inStock}`);
}
}
logProduct("Product not found");
logProduct({id: 1, name: "Laptop", price: 999.99, inStock: true});

function wrapValue<T>(value:T):T[] {
    return [value];
    
}
console.log(wrapValue([42,4,3,"hello"])); 

interface ApiResult<T> {
    data:T;
    success:boolean;
    message: string;
}
const result: ApiResult<ProductOrError> = {
    data: { id: 1, name: "Laptop", price: 999.99, inStock: true },
    success: true,
    message: "Product retrieved successfully"
};
console.log(result);

const res:ApiResult<ProductOrError> = {
    data: "Product not found",
    success: false,
    message: "Error retrieving product"
};
console.log(res);
function processApiResult<T>(result: ApiResult<T>): void {
    if (result.success) {
        console.log("Data:", result.data);
    } else {
        console.error("Error:", result.message);
    }
}
processApiResult(result);
processApiResult(res);
