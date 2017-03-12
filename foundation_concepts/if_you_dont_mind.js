// INSTRUCTIONS
// Create a program that will tell you the time.
// With the following variables...
// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM"
// ...your program should print "It's almost 9 in the morning"
// And when changed to...
// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM"
// ...your program should print "It's just after 7 in the evening"
//
// Challenge:
// If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
// AM / PM, "in the morning", "in the evening",

// Bonus (Only If You Have Time):
// Add functionality for "quarter after", "half past", "5 after" ...
// Distinguish between "in the afternoon", "at night", "noon", "midnight" ...

var HOUR = 12;
var MINUTE = 00;
var PERIOD = "PM"

if (HOUR ==12 && MINUTE == 00) {
    if (PERIOD == "AM") {
        console.log("It's midnight.")
    }
    else {
        console.log("It's noon.")
    }
}
else if (MINUTE == 05) {
    if (PERIOD == "AM") {
        console.log("It's 5 after", HOUR, "in the morning.")
    }
    else {
        console.log("It's 5 after", HOUR, "in the evening.")
    }
}
else if (MINUTE == 15) {
    if (PERIOD == "AM") {
        console.log("It's a quarter after", HOUR, "in the morning.")
    }
    else {
        console.log("It's a quarter after", HOUR, "in the evening.")
    }
}
else if (MINUTE == 30) {
    if (PERIOD == "AM") {
        console.log("It's a half past", HOUR, "in the morning.")
    }
    else {
        console.log("It's a half past", HOUR, "in the evening.")
    }
}
else if (MINUTE < 30) {
    if (PERIOD == "AM") {
        console.log("It's just after", HOUR, "in the morning.")
    }
    else {
        console.log("It's just after", HOUR, "in the evening.")
    }
}
else if (MINUTE > 30) {
    if (PERIOD == "AM") {
        console.log("It's almost", HOUR + 1, "in the morning.")
    }
    else {
        console.log("It's almost", HOUR + 1, "in the evening.")
    }
}
