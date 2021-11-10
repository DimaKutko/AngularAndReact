class SumStr {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    getStr() {
        return this.value1 + this.value2;
    }
}

module.exports = SumStr

const a = new SumStr('123', '456');