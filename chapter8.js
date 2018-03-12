class Restaurant {
    constructor(name, place) {
        console.log(`${name} loves to eat at ${place}`);
    }
}

console.log(typeof Reflect);

let r = Reflect.construct(Restaurant, ['Nathan', 'Outback']);
console.log(r instanceof Restaurant);

class Student {
    constructor () {
        this.id = 33;
    }
    show() {
        console.log(this.id);
    }
}

Reflect.apply(Student.prototype.show, { id: 44 }, {});