// Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:
//
// [ "James", "Jill", "Jane", "Jack" ]
// Let's make it look fancy! Write a function that will make it print like:
//
// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack
// Bonus (Only If You Have Time):
//
// Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
// Have an extra parameter reversed. If the user passes true, print the elements in reverse order

function fancyArray(arr, symbol, reversed)
{
    if (reversed == true)
    {
        if (symbol)
        {
            for (var idx = arr.length - 1; idx >= 0; idx--)
            {
                console.log(idx + " " + symbol + " " + arr[idx]);
            }
        }
        else
        {
            for (var idx = arr.length - 1; idx >= 0; idx--)
            {
                console.log(idx + " -> " + arr[idx]);
            }
        }
    }
    else
    {
        if (symbol)
        {
            for (var idx = 0; idx < arr.length; idx++)
            {
                console.log(idx + " " + symbol + " " + arr[idx]);
            }
        }
        else
        {
            for (var idx = 0; idx < arr.length; idx++)
            {
                console.log(idx + " -> " + arr[idx]);
            }
        }
    }
}



var names = [ "James", "Jill", "Jane", "Jack" ];
fancyArray(names);
fancyArray(names, ">>>");
fancyArray(names, ">>>", true);
