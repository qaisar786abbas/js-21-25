//>>>>>>>>>>>>>>>CHAPTER NO 21 TO 25>>>>>>.

//Question NO 01

// var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");
// var fullName = firstName + lastName;
// alert(fullName + " " + "Good morning!");

//Question no 02

// var person = prompt("Enter your favorite mobile model?");
// var length = person.length;
// document.write("Your favorite mobile is:" + " " + person + "." + "</br>" + " Length of string is:" + length);


//Question no 03
// var string = "pakistani";
// var str = string.indexOf("n");
// document.write("String: pakistani" + "</br>");
// document.write("Index of 'n' is:"  + str);


//Question no 04

// var string = "hello world";
// var str = string.lastIndexOf("l");
// document.write("String: hello world" + '</br>');
// document.write("index of 'l'is:" + str);

//Question no 05

// var string = "pakistani";
// var str = string.charAt(3);
// document.write("The character at 3th index is:" + str);

//question no 06

//  var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");
// var fullName = firstName.concat(" " + lastName);
// alert(fullName);


//Question no 07

// var city = "hyderabad";
// alert(city);
// var str = city.replace("hyder","islam");
// alert(str);


//Question no 08

// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// var str = message.replaceAll("and" , "&");
// document.write(str);


//Question no 09

// var number = Number("472");
// document.write("Value: ", number , "</br>");
// document.write("Type: ", typeof number);


//Question no 10

// var fruit = prompt("Enter the peanut:");
// var str = fruit.toUpperCase(fruit);
// alert(str);


//Question no 11

// var word = prompt("Enter the word");
// var str = word.toUpperCase(word);
// document.write("User input: ", word , "</br>");
// document.write("Title Case:" , str , "</br>");


//Question no 12

// var num = 35.36;
// var str = num.toString().replace("." , "");
// alert(str);
// document.write("Num:", " ", num , "</br>");
// document.write("Result:", " ", str);


//Question no 13

// var userName = prompt("Enter your username:");
// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//   userName = prompt("Invalid username. Please enter a valid username without @, ., ,, or !:");
// }
// document.write("Your username is: " + userName);

//Question no 14


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   alert(userInput + " is available in our bakery.");
// } else {
//   alert(userInput + " is not available in our bakery.");
// }


//Question no 15

// Prompt user to enter password
// let password = prompt("Enter your password:");


// var validPassword = true;

// var regex = /^[a-zA-Z0-9]+$/;
// if (!regex.test(password)) {
//   validPassword = false;
// }

// var firstChar = password.charAt(0);
// if (!isNaN(firstChar)) {
//   validPassword = false;
// }

// if (password.length < 6) {
//   validPassword = false;
// }

// if (!validPassword) {
//   password = prompt("Invalid password. Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:");
// }

// document.write("Your password is: " + password);


//Question no 16

// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("<h3>University Name:</h3>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//   document.write("<li>" + universityArray[i] + "</li>");

// }
// document.write(universityArray);



//Question no 17

// var userInput = prompt("Enter a string:");

// var lastCharacter = userInput.charAt(userInput.length - 1);

// alert("The last character of your input is: " + lastCharacter);


//Question no 18

// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;

// str = str.toLowerCase();

// var words = str.split(" ");

// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// alert("The word 'the' occurs " + count + " times in the string.");

























