import Product from './Product';
import './styles/styles.css';
import json from './assets/test';
import img from './assets/webpack.png';
import xml from './assets/cd_catalog.xml';
import * as $ from 'jquery';

console.log('Hello from Node.JS');
const product = new Product('PC', 20000, img);
console.log(product.toString());

$('pre').html(product.toString());

console.log('JSON: ', json);
console.log('xml: ', xml);