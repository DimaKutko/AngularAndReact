export default class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            name: this.name,
            price: this.price,
            date: this.date.toJSON()
        });
    }
}