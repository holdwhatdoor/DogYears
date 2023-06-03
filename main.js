// Practice problem to convert my age into dog years

var myAge = 38;
// Step 1: var with my current age
console.log('My age initially... ' + myAge);

var earlyYears = 2;
console.log('Initial earlyYears value... ' + earlyYears);
// Step 2: var equal to first two years of age

earlyYears *= 10.5;
// Step 3: first two years of age converted to dog years

var laterYears = myAge -=2;
console.log('Number of years beyond the first two... ' + laterYears);
// Step 4: myAge minus 2 years, result will be used to calculate dog years

laterYears *=4;
// Step 5: converts laterYears into dog years

console.log('Value of earlyYears after dog years conversion... ' 
+ earlyYears);
console.log(`laterYears converted to dog years... ` + laterYears);
// Step 6: console log to verify result of earlyYears and laterYears
// after conversion to Dog Years

var myAgeInDogYears = earlyYears + laterYears;
console.log(`My age in Dog Years... ` + myAgeInDogYears);
// Step 7: adds earlyYears and laterYears to get total dog years age

var name = `Scott`;
var myName = name.toLowerCase();
console.log(`My name lower case... ` + myName);
// Step 8: var that holds lower case string of my name

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
