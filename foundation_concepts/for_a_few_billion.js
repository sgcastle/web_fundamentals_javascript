// There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).
//
// Use for loops to answer the following:
//
// How much was the reward after 30 days?
// remember, a penny isn't 1, but 0.01
//
// Bonus (Only If You Have Time):
//
// How many days would it take the servant to make $10,000?
// How about 1 billion?
// In JavaScript, there is a value Infinity, how many days until the servant has infinite money?

var pennies = 0;
var counter = 1;
var days = 1;
while (days <= 30)
{
    pennies = counter
    counter = counter + counter
    // if (days == 1)
    // {
    // console.log("On day", days, "you will have", pennies, "penny.")
    // }
    // else
    // {
    //     console.log("On day", days, "you will have", pennies, "pennies.")
    // }
    days ++
}
console.log("At the end you will have $" + pennies/100, "dollars on day", days - 1)


var pennies = 0;
var counter = 1;
var days = 1;
console.log("Bonus:")
console.log("$10000")
while (pennies < 10000 * 100)
{
    pennies = counter
    counter = counter + counter
    // if (days == 1)
    // {
    // console.log("On day", days, "you will have", pennies, "penny.")
    // }
    // else
    // {
    //     console.log("On day", days, "you will have", pennies, "pennies. $" + pennies/100)
    // }
    days ++
}
console.log("At the end you will have $" + pennies/100, "dollars on day", days - 1)

var pennies = 0;
var counter = 1;
var days = 1;
console.log("Bonus:")
console.log("$1000000000")
while (pennies < (1000000000 * 100))
{
    pennies = counter
    counter = counter + counter
    // if (days == 1)
    // {
    // console.log("On day", days, "you will have", pennies, "penny.")
    // }
    // else
    // {
    //     console.log("On day", days, "you will have", pennies, "pennies. $" + pennies/100)
    // }
    days ++
}
console.log("At the end you will have $" + pennies/100, "dollars on day", days - 1)

var pennies = 0;
var counter = 1;
var days = 1;
console.log("Bonus:")
console.log("Infinity")
while (pennies != Infinity)
{
    pennies = counter
    counter = counter + counter
    // if (pennies == Infinity)
    // {
    //     break
    // }
    // else
    // {
    //     if (days == 1)
    //     {
    //     console.log("On day", days, "you will have", pennies, "penny.")
    //     }
    //     else
    //     {
    //         console.log("On day", days, "you will have", pennies, "pennies. $" + pennies/100)
    //     }
    // })
    days ++
}
console.log("At the end you will have $" + pennies/100, "dollars on day", days -1)
