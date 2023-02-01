//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foods(person) {
    console.log("Pizza: " + person.pizza);
    console.log("Tacos: " + person.tacos);
    console.log("Burgers: " + person.burgers);
    console.log("Icecream : " + person.ice_cream);
    //loop through shakes dict using for each to get keys then print values associated
    console.log("Shakes: ");
    Object.keys(person.shakes[0]).forEach(function(key) {
        console.log(" " + key + ": " + person.shakes[0][key]);
    });

}

foods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function People(name, age){
    this.name = name;
    this.age = age;
   
}

// Use an arrow to create the printInfo method

//arrow notation simplifies so that function doesnt have to be writen again
    People.prototype.printInfo = () => {
        //$ acts like f string
        console.log('Name: ${this.name}');
        console.log('Age: ${this.age}');
    };

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    People.prototype.addAge = () => {
        this.age++;
    };

let person = new People("Trinisia Fortune", 28);
console.log(person.printInfo());


let person2 = new People("Yona Fortune", 1);
person2.printInfo();
person2.addAge();
person2.addAge();
person2.addAge();
person2.printInfo();



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const String = (words) => {
   return new Promise((resolve, reject) => {
    if (words.length > 10) {
        resolve("Big word");
    } else{
        resolve("Small word");
    }
   });
};

String("howdy").then((result) => {
    console.log(result);
})
  

// */
// const isEvenNumber = (num) => {
//     return new Promise( (resolve,reject) => {
//         if(num % 2 == 0){
//             resolve(true)
//         } else {
//             reject(false)
//         }
//     })
// }

// // Using a JS Promise
// isEvenNumber(10)
// //Happy resolver path
// .then( (result) => {
//     console.log(`Even Number ${result}`)
// })
// //Sad Reject path
// .catch( (error) => {
//     console.log(`Odd Number ${error}`)
// })