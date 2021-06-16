/* Write a JavaScript program to list the properties of a JavaScript object.

Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
Sample Output: name,sclass,rollno */
console.log('Question 1');
var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};
console.log(student);
var properties = Object.keys(student);
console.log(properties);

/*Write a JavaScript program to delete the rollno property from the following object, also print the object before or after deleting the property.
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: { name : "David Rayy", sclass : "VI"}*/
console.log('Question 2');
var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};
// console.log(getkey[rollno]);
delete student.rollno;
console.log(student);

/* Write a JavaScript program to get the length of a JavaScript object.
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };  */
console.log('Question 3');
var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};
objectLength = Object.keys(student).length
console.log(objectLength);

/*Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
  */
console.log('Question 4');
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("need to read " + book);
    }
   }

/* Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr^(2)h where r is the radius and h is the height of the cylinder.*/
console.log(volume(10.45, 5.48));
console.log(volume(10, 10));
function volume(height, radius) {
  let volumeOfCylinder = 3.14 * radius * radius * height;
  //alternatively
  //return volumeOfCylinder.toFixed(4)
  try {
    let decimal = volumeOfCylinder.toString().split(".")[1].slice(0, 4);
    return volumeOfCylinder.toString().split(".")[0] + "." + decimal;
  } catch {
    return volumeOfCylinder;
  }
}

/*Write a JavaScript program to sort an array of JavaScript objects.
Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
Expected Output: 
[[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
[object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
[object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]  */
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

let sortArray = (a, b) => {
  //Compares by title name
  return a.title.localeCompare(b.title);
  /* To compare by LibraryID 
  return a-b */
  /* To compare by Author
  return a.author(localeCompare(b.author));
  */
};
library.sort(sortArray);
console.log(library);









