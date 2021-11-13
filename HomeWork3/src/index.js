import Product from './Product'
import User from './User'

console.log('Hello from Node.JS');
const product = new Product('PC', 20000);
console.log(product.toString());

const newUser = new User('Dima', 'Kut\'ko', 21);
console.log(newUser.toString());