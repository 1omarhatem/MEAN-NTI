class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  isAdult() {
    return this.age >= 18;
  }
  
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`);
  }
}

const omar = new Person("Omar", 25);
const layla = new Person("Layla", 16);

console.log("--- Omar's Info ---");
console.log(omar.sayHello());
console.log(`Is Omar an adult? ${omar.isAdult()}`);
omar.celebrateBirthday();
console.log(`Updated age: ${omar.age}`);

console.log("\n" + "--- Layla's Info ---");
console.log(layla.sayHello());
console.log(`Is Layla an adult? ${layla.isAdult()}`);
layla.celebrateBirthday();
console.log(`Updated age: ${layla.age}`);