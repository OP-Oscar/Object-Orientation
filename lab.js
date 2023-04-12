//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

//Code here
console.log("--------------Problem 1----------------")
let person = {  // => creating object
  name: "Oscar", // => variable name
  age: 30        // => variable age
}

console.log(person) // => printing

//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

//Code here
console.log("--------------Problem 2----------------")
const dog = {  // =>creating object
  name: "rocky",  // => name variable
  color: "brown",  // => color variable
  age: 2,          // => age variable
  goodBoy: true    // => boolean variable
}

console.log(dog)

//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//Code here
console.log("--------------Problem 3----------------")
console.log(dog.name) // => printing out dog object name attribute

//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

//Code here
console.log("--------------Problem 4----------------")
console.log(dog['name']) // => printing out dog object name attribute



//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here
console.log("--------------Problem 5----------------")
let objects = { // =>creating object called objects
  band: "any",
  food: "fruit salads",
  person: "daughters",
  book: "Automate the boring stuff with Python",
  movie: "Comedy movies",
  holiday: "Christmas"
}
console.log(objects)

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

//Code here
console.log("--------------Problem 5 part2----------------")
objects['car'] = "Toyota Tundra"; // => adding key named 'car' and assigning it 'Toyota Tundra'
objects['show'] = "GoT";         // => adding key named 'show' and assigning it 'GoT'

console.log(objects)  // => printing out object called objects

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

//Code here
console.log("--------------Problem 5 part3----------------")
objects['food'] = 'Chicken Nuggets'; // => re-assigning key value 'food', not modifying original
objects.book = 'Harry Potter'; // => re-assinging book value, not modifying original
console.log(objects) // => printing objects once more for review


//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
const carDetails = { // => creating carDetails object
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here
console.log("--------------Problem 6----------------")
let {color} = carDetails; // => destructuring to create color variable
let {make} = carDetails;  // => destructuring to create make variable
let {model} = carDetails;  // => destructuring to create model variable
let {year} = carDetails;  // => destructuring to create year variable

console.log(color); // => printing
console.log(make);
console.log(model);
console.log(year);

//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {  // => creating function called greeting
  //Code Here
  const {title, firstName, lastName} = obj  // => assuming obj exists, destructing properties as variables

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!'; // => string to return
  // Do not edit the code above.
}

console.log("--------------Problem 7----------------")

console.log(' - ')

//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
console.log("--------------Problem 8----------------")

function totalPopulation(object){ // => creating function that takes in object
  let {utah, california, texas, arizona} = object; // => destructuring properties in object to create variables
  let sumup = utah + california + texas + arizona; // => returning addition of properties which are integers
  return sumup
}
console.log(' - ')

//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
console.log("--------------Problem 9----------------")
function ingredients(object){ // => creating function
  let blankarray = [] // => empty array which we will add values of properties within object
  let {carb, fat, protein} = object
  blankarray.push(carb)
  blankarray.push(fat)
  blankarray.push(protein)
  return blankarray

}
console.log(' - ')

//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = { // => creation of an object called user
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

//Code Here
console.log("--------------Problem 10----------------")
user.name = 'Bryan G. Smith' // => changing user attribute value
user.email = 'bryan.smith@devmounta.in'

console.log(user)


//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

//Code Here
console.log("--------------Problem 11----------------")
delete user.age // => deleting object property
console.log(user)

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here
console.log("--------------Problem 12----------------")
class Cat{                          // => creating class Cat
    constructor(name, age, color){   // => setting constructor for future instances of class
      this.name = name;  // => assigning values....if you use this.namesss = name then property is called namesss
      this.age = age;
      this.color = color;
    }
}

const orangeCat = new Cat('Garfield', '3', 'Orange'); // => creating instance of Cat class

console.log(orangeCat) // => printing instance

//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
console.log("--------------Problem 13----------------")
class Wizard{
  constructor(name, age, favoriteSpell){
  this.name = name;
  this.age = age;
  this.favoriteSpell = favoriteSpell;
}
  castSpell() {
  console.log(`${this.name} has cast ${this.favoriteSpell}`)

}
}

const buddy = new Wizard("Spongebob", 20, "Jelly fishing")

buddy.castSpell()

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here
console.log("--------------Problem 14----------------")
class Phone{
  constructor(brand, model, storage, color, price){
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false;
  }
  sell(){
    this.sold = true
    console.log(`${this.brand} ${this.model} has been sold.`)
  }
  changePrice(newPrice){
    console.log(`Old price ${this.price}`)
    this.price = newPrice
    console.log(`New price ${this.price}`)
  }
}

console.log(' - ')
//testing code
// let razr = new Phone('brand1', 'model1', 'storage1', 'color1', '100')
// razr.changePrice(44)


/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here
console.log("--------------Problem 14 part2----------------")
let razr = new Phone('Motorolla', 'Razor', '13', 'Black', 50)
let andriod = new Phone('Google', 'Pixel', 1024, 'Blue Sky', 1000)
let ios = new Phone('Apple', 'iPhone', 1024, 'Space Gray', 1200)
console.log(' - ')

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

//Code Here 
console.log("--------------Problem 14 part3----------------")
ios.changePrice(2000)
console.log(ios)


/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here 
console.log("--------------Problem 14 part4----------------")
razr.sell()
console.log(razr)

//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

//Code Here 
console.log("--------------Problem 15----------------")
let colorsCopy = {...colors}

console.log(colorsCopy)

/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

//Code Here
console.log("--------------Problem 15 part2----------------")
const helensInfo = {...contactInfo, ...shippingInfo}

//Print helensInfo to see what it looks like, there should be no repeating properties.
console.log(helensInfo)

//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here 
console.log("--------------Problem 16----------------")
class Vehicle{
  constructor(capacity, color, mileage){
    this.capacity = capacity;
    this.color = color;
    this.mileage = mileage;
  }
  move(miles){
    this.mile = this.mileage + miles
    console.log(this.mile)
  }
}

console.log(' - ')

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here
console.log("--------------Problem 16 part2----------------")
const myFirstVehicle = new Vehicle(4, 'red', 120,000)
console.log(myFirstVehicle)

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here
console.log("--------------Problem 16 part3----------------")
class Motorcycle extends Vehicle{
  constructor(capacity, color, mileage, make, isCool){
    super(capacity, color, mileage)
    this.make = make;
    this.isCool = isCool;
  }

}
console.log(' - ')

/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here 
console.log("--------------Problem 16 part4----------------")
const myFirstMotorcycle = new Motorcycle(1, 'red', 800, 'Yamaha', 'yes')
console.log(myFirstMotorcycle)

/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(57)
console.log(myFirstMotorcycle)
/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here
console.log("--------------Problem 16 part5----------------")
class Boat extends Vehicle{
  constructor(capacity, color, mileage, name, type,isSeaWorthy){
    super(capacity, color, mileage);
    this.name = name;
    this.type = type;
    this.isSeaWorthy = isSeaWorthy;
  }
  checkSeaworthiness(){
    if(this.isSeaWorthy){
      console.log(`The ${this.color} ${this.type} ${this.name} is seaworthy!`)
    }
    else{
      console.log(`You need to get your ${this.type} in shape!`)
    }
  }
    performMaintenance() {
    return this.isSeaWorthy = true
    }
}

console.log(' - ')
/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here
console.log("--------------Problem 16 part6----------------")
const myFirstBoat = new Boat(8, 'white', 5000, 'speedy', 'boat', false)
console.log(myFirstBoat)



/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here
console.log("--------------Problem 16 part7----------------")
myFirstBoat.checkSeaworthiness()


/*
  Now run the performMaintenance method on your boat
*/

//Code Here 
console.log("--------------Problem 16 part8----------------")
myFirstBoat.performMaintenance()
console.log(' - ')

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here
console.log("--------------Problem 16 part9----------------")
myFirstBoat.checkSeaworthiness()
