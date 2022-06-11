let markHigherBmi;

// let markWeight = 78;
// let markHeight = 1.69;

// let johnWeight = 92;
// let johnHeight = 1.95;

let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

const markBmi = markWeight / (markHeight ** 2);
const johnBmi = johnWeight / (johnHeight ** 2);

markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi)
console.log(markHigherBmi);