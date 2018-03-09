import {projectId as pid, id} from 'module1.js';
import prj from 'module1.js';

import {showFunction, updatedFunction} from 'module1.js';
showFunction();
updatedFunction();
showFunction();

console.log("Logging out a message from inside base.js!");
console.log(`Project id is ${pid} while the id is ${id} and the project name is ${prj}`);

class Task{
    constructor() {
        console.log('Inside the Task constructor.');
    }
    showId() {
        console.log('Id is 48');
    }
    getId() {
        return 48;
    }
    getCount() {
        return 60;
    }
    static zero() { return 0;}
}
let task = new Task;
console.log(typeof Task);
console.log(typeof task);

class MoreThanASimpleTask extends Task {
    constructor() {
        super();
        console.log('Inside the MoreThanASimpleTask constructor.')
    }
    getId() {
        return 50;
    }
    getCount() {
        return super.getCount() + 2;
    }
};
let more = new MoreThanASimpleTask();

console.log(more.getId());
console.log(more.getCount());
console.log('----------------------');
console.log(Task.zero());