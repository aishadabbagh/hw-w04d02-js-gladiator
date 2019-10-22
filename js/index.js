'use strict';
import Gladiator from './gladiator.js';
import Arena from './arena.js';

//Part1 The Gladiator
const max = new Gladiator("Maximus","Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"


//Part 2 The Arena 

//Arena has a name
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name);

// //should capitalized
// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis

// //Arena has gladiators
// console.log(colosseum.gladiators); // => []

//test
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
console.log(colosseum.name); // => Megalopolis
console.log(colosseum.gladiators); // => []


//adding gladiator
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]



//arena shouldnt have more than 2 gladiators
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length); // => 2

//fight
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators[0].name); // => [max] 