let eventSymbol = Symbol("resize event");
console.log(typeof eventSymbol);
console.log(eventSymbol.toString());
console.log(Symbol.for('resize event'));

let s = Symbol.for('event');
console.log(s);