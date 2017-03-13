// Let's play the slots!
//
// Make a function that takes a number of quarters (1 quarter = 1 game).
//
// There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).
//
// While the user still has quarters, use Math.random to determine if they won.
//
// If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).
//
// Return 0 if all the quarters were wasted.
//
// Bonus (Only If You Have Time):
//
// Let the user pass the number they are willing to leave with
// (ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)

function letPlaySlots(num_of_quarters, user_limit)
{
    if(user_limit)
    {
        while (num_of_quarters > user_limit)
        {
            chance = Math.floor(Math.random() * 100);
            console.log("lets play a round! You've only got " + num_of_quarters + "quarters!");
            if (chance == 0)
            {
                winnings = Math.floor(Math.random() * 50) + 50;
                console.log("you've just won " + winnings + " quarters!");
                num_of_quarters = num_of_quarters + winnings;
                return num_of_quarters;
            }
            num_of_quarters--;
        }
        console.log("Getting out before you lose it all was smart! You still have " + num_of_quarters + " left!");
    }
    else
    {
        while (num_of_quarters)
        {
            chance = Math.floor(Math.random() * 100);
            console.log("lets play a round! You've only got " + num_of_quarters + "quarters!");
            if (chance == 0)
            {
                winnings = Math.floor(Math.random() * 50) + 50;
                console.log("you've just won " + winnings + " quarters!");
                num_of_quarters = num_of_quarters + winnings;
                return num_of_quarters;
            }
            num_of_quarters--;
        }
        console.log("better luck next time!");
    }
    return num_of_quarters;
}

wallet = letPlaySlots(100, 5);
