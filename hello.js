console.log('Hello world!!!')
const a = 12;
const b = 100;

// console.log(typeof a) //  number
// const sum = a+b;
// const subs = a-b;
// console.info('The sum of A and B is:'+ sum)
// console.info('The subs of A and B is:'+ subs)
// console.info('The multiples of A and B is:'+ (a * b))
// console.info('The division of A and B is:'+ (a / b))


// // This is trial for the latest update 
// let name = 'Ishaan'
// console.log('Hello '+ name + ' !!!')
// console.log('Hello '+ 'Binoy' + ' !!!')

// learn about Objects -- we are living in Objects world - in IT world 
// Objcets combination of Nouns(Properties) and Adjectives ( Actions ) A descriptive info 
// Lets create an example

var car = {
    name: 'Marcedes',
    weight: '15',
    colour: 'Silver',
    // Some functions
    drive :  function () 
{ return "The " + car.name + "is driving " + "at" + car.speed }
}
//console.log(car)
// console.log('I am using ' + car.name + ' for commuting work.' + 'Its colour is '+ car.colour )
// Editing an Object
// car.name = 'BMW' 
// console.log('I am using ' + car.name + ' for commuting work.' + 'Its colour is '+ car.colour )

// Good thing is that we can add more properties in the Car Objects
car.speed = '300 m/h'
//console.log(car)

// Now we also can delete it 
//delete car.speed
//console.log(car)

// Its quite imprtant for QA Eng to handle undefined and Nan 
// for example
//console.log(car.testForSomething) // results undefined

//console.log(car)

// Some embedded Ojects { Nested Objects in Objects}
let computer = {
    name: 'Apple',
    price: '£3000',
    screen: {
        type: 'Touch Screen',
        size: '15 inches'
    },
    'config file': {
        RAM: '16GB',
        SSD: '500GB'
    }
}
console.log(computer.screen)
console.log(computer["config file"])
console.log(computer["config file"].RAM)



