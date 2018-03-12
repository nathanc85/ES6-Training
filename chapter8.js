class Restaurant {}

console.log(typeof Reflect);

let r = Reflect.construct(Restaurant, []);
console.log(r instanceof Restaurant);