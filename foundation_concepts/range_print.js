// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.
//
// For example:
//
// printRange(2, 10, 2);
// Copy
// Would print
//
// 2
// 4
// 6
// 8
// (Should go UP TO, but NOT INCLUDING the end point)
//
// Bonus (Only If You Have Time):
//
// Make sure it works for negative numbers
// If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
// If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3)

function printRange(first_num, last_num, third)
{
    if (!last_num && !third)
    {
        last_num = first_num;
        first_num = 0;
        third = 1;
    }
    else if (!third)
    {
        third = 1
    }
    console.log(first_num, "first_num");
    console.log(last_num, "last_num");
    console.log(third, "third");
    var num = first_num;
    if(first_num < last_num && third > 0)
    {
        while (num < last_num)
        {
            console.log(num);
            num = num + third;
        }
    }
    else if(first_num > last_num && third < 0)
    {
        while (num > last_num)
        {
            console.log(num);
            num = num + third;
        }
    }
    else if(first_num > last_num && third > 0)
    {
        while (num > last_num)
        {
            console.log(num);
            num = num - third;
        }
    }
    else
    {
        console.log("Please try again")
    }
}

while (true) {

}
while (true)
{

}

// Test Case:
// printRange(0, 10, 2);
// printRange(10, 0, -2);
// printRange(5, 10);
// printRange(3, 50);
// printRange(-10);
// printRange(-10, -50, 5);
// printRange(-50, -5, 10);
