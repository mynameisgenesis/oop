'user strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const genesis = new Person('Genesis', 1992);
console.log(genesis);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(genesis instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

genesis.calcAge();
matilda.calcAge();

console.log(genesis.__proto__);
console.log(genesis.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(genesis));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(genesis, matilda);

console.log(genesis.species, matilda.species);

console.log(genesis.hasOwnProperty('firstName'));
console.log(genesis.hasOwnProperty('species'));

console.log('Person.prototype: ', genesis.__proto__);
console.log('Object.prototype: ', genesis.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // This is equivalent to using new Array

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  reuturn [...new Set(this)];
}