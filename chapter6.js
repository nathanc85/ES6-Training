let ids = [9000, 9001, 9002];
let iter = ids[Symbol.iterator]();
iter.next();
iter.next();
console.log(iter.next());