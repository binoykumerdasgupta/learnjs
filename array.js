console.log('************* We are going to learn Array ***************')

// multiple values in a single var / Objects [any data type primitive and non primitive data types]
// length of array is not fixed also array represts LISTS, Objects
var fruit = 'Apple'
var fruits = ['Apple', 'Orange', 'Banana', 'Mango']
//console.log(fruit)
console.log(typeof fruits)
console.info(fruits[2])
var fruits = ['Jackfruit']
console.info(fruits)

var fruits = new Array ('Strawbweey', 'watermelon')
console.info(fruits)

var misc = ['Apple', 123, true, {name: 'Binoy'}, ['a', 'b', 'c']]
console.log(typeof misc) // exam qs

// Embedded Arrays and Objects 

let embObj = {
    name: 'QA training',
    modules: {
        programming: ['JavaScript', 'TypeScript', 'HTML', 'Gherkins', 'Swift', 'Kotlin'],
        'Debugging tools': ['Charles Proxy', 'Fiddler', 'Swagger', 'JIRA']
    },
    tools: {
        'functional testing': ['Cypress', 'Selenuim Webdriver']
    }
}