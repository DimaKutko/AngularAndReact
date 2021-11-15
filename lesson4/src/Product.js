export default class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            name: this.name,
            price: this.price,
            date: this.date.toJSON(),
            img: this.img
        }, null, 2);
    }
}