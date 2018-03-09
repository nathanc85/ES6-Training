import {projectId as pid, id} from 'module1.js';
import prj from 'module1.js';

import {showFunction, updatedFunction} from 'module1.js';
showFunction();
updatedFunction();
showFunction();

console.log("Logging out a message from inside base.js!");
console.log(`Project id is ${pid} while the id is ${id} and the project name is ${prj}`);