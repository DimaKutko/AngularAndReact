export default class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    toString() {
        return JSON.stringify({
            name: this.name,
            surname: this.surname,
            age: this.age,
        });
    }
}