export let projectId = 99;
export let id = '22';

let projectName = 'Super Project';
export default projectName;

export function showFunction() { console.log('In original...'); }
export function updatedFunction() {showFunction = function() {console.log('In updated...');};}