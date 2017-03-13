// Make a function that copies an array, ONLY accepting the items that are numbers.
//
// IT SHOULD RETURN A NEW ARRAY
//
// ex:
//
// var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// // newArray is [1, -3, 0.5]
// Copy
// HINT
//
// Use typeof to determine type (ex: typeof 24 === "number" would be true)
//
// Bonus (Only If You Have Time):
//
// Make a second function that removes them from the given array. (instead of copying to a new array)
// Do you need to return the array?


function copyArray(arr)
{
    var new_copy = []
    for (var idx = 0; idx < arr.length; idx++)
    {
        if (typeof arr[idx] === "number")
        {
            new_copy.push(arr[idx]);
        }
    }
    return new_copy
}

function bonusRemoveNum(arr)
{
    for (var idx = 0; idx < arr.length; idx++)
    {
        if (typeof arr[idx] === "number")
        {
            arr.splice(idx, 1);
        }
    }
}

sample_array = [1, "apple", -3, "orange", 0.5];
copy = copyArray(sample_array);
console.log(copy);

bonusRemoveNum(sample_array);
console.log(sample_array);
