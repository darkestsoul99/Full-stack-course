// var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";
var sillyName = generateName();
var superheroName = superheroes.random();
console.log(sillyName); // Output: "Sassy Pineapple"
console.log(superheroName);