module.exports.table = function (num = 5) {
    console.log(`The table of ${num}: `);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
    console.log("Table ends here...")
}

module.exports.addFunc = (a, b) => a + b;

module.exports.employee = class {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    display = () => `${this.name} from ${this.address} with ID ${this.id}`;
}