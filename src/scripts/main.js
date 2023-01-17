// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery('Mug', 4, 5)
console.log(mug)

let cup = makePottery('Cup', 10, 3)
console.log(cup)

let bowl = makePottery('Bowl', 6, 6)
console.log(bowl)

let vase = makePottery('Vase', 4, 12)
console.log(vase)

let jar = makePottery('Jar', 20, 10)
console.log(jar)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1900)
let firedCup = firePottery(cup, 2300)
let firedBowl = firePottery(bowl, 2000)
let firedVase = firePottery(vase, 2100)
let firedJar = firePottery(jar, 9001)

console.log(firedMug)
console.log(firedCup)
console.log(firedBowl)
console.log(firedVase)
console.log(firedJar)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



