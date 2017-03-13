// Part I
//
// Given the following array of objects:
//
// var students = [
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
// ]
// Create a program that outputs:
//
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel
// Part II (Optional)
//
// Now, given the following dictionary:
//
// var users = {
//  'Students': [
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
//   ],
//  'Instructors': [
//      {first_name : 'Michael', last_name : 'Choi'},
//      {first_name : 'Martin', last_name : 'Puryear'}
//   ]
//  }
// Create a program that prints  the following format (including the number of characters in each combined name):
//
// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13

function roleCall(obj)
{
    for (student in students)
    {
        console.log(students[student].first_name, students[student].last_name);
    }
}

var students = [
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

// function stuedntTeacherInfo(obj)
// {
//     console.log("Students");
//     for (user in users)
//     {
//         console.log(users[user].);
//         console.log(student + " - " + students[student].first_name, students[student].last_name + " - " + students[student].length);
//     }
// }
//
// var users =
// {
//     'Students': [
//         {first_name:  'Michael', last_name : 'Jordan'},
//         {first_name : 'John', last_name : 'Rosales'},
//         {first_name : 'Mark', last_name : 'Guillen'},
//         {first_name : 'KB', last_name : 'Tonel'}
//     ],
//     'Instructors': [
//         {first_name : 'Michael', last_name : 'Choi'},
//         {first_name : 'Martin', last_name : 'Puryear'}
//     ]
// }


roleCall(students);
