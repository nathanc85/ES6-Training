let ids = [9000, 9001, 9002];
let iter = ids[Symbol.iterator]();
iter.next();
iter.next();
console.log(iter.next());

function *process(){
    yield 8000;
    yield 8001;
}

let it = process();
it.next();
it.next();
console.log(it.next());