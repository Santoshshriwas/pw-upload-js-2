const productDetails = {
  name: "Apple 2024 MacBook Air Laptop",
  price: 112000,
  color: "Grey",
  hardDisk: "256 GB",
};

console.log("Below are the product details.");
for (let keys of Object.keys(productDetails)) {
  console.log(`${keys} : ${productDetails[keys]}`);
}
