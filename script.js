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
console.log(markBmi, johnBmi);

if (markBmi > johnBmi) {
  console.log(`Marks's BMI (${markBmi}) is higher
  than Johns's (${johnBmi})!`)
} else {
  console.log(`Johns's BMI (${johnBmi}) is higher
  than Mark's (${markBmi})!`)
}