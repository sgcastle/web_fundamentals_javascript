//
// Create a birthday countdown.
//
// var daysUntilMyBirthday = 60;
// Copy
// For every day, print how many days left.
//
// If it's more than 30 days, print a sad message.
//
// If it's less than 30 days, print a message sound excited!
//
// If it's less than 5 days, SCREAM IT!
//
// ONCE IT'S YOUR BIRTHDAY HAVE PARTY!
//
// 60 days until my birthday. Such a long time... :(
// 59 days until my birthday. Such a long time... :(
// 58 days until my birthday. Such a long time... :(
// 2 DAYS UNTIL MY BIRTHDAY!!!
// 1 DAY UNTIL MY BIRTHDAY!!!
// ♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
// ♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
// *•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«

var daysUntilMyBirthday = 60;
while (daysUntilMyBirthday >= 1)
{
    if (daysUntilMyBirthday == 1)
    {
        console.log(daysUntilMyBirthday, "DAY UNTIL MY BIRTHDAY!!!");
    }
    else if (daysUntilMyBirthday >= 30)
    {
        console.log(daysUntilMyBirthday, "days until my birthday. Such a long time... :(")
    }
    else
    {
        console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!");
    }
    daysUntilMyBirthday --
}
console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*")
console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪")
console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*")
