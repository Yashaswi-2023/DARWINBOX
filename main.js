var i = 0;
for( i = 0; i < 10; i++ ){
    console.log(i);
}
console.log("index: "+i)

var arr=[10,20,30,"string i"]
console.log(arr);
arr.unshift(100)
arr.shift()
console.log(arr)

var arr=[10,20,30,"string i"]
arr.map(function(ele){

})

var student = {
    "name": "Jon Doe",
    "address": "addr i",
    "code": "2D1001"
}
console.log(student);

var new_obj = {...student, "age": 30}
console.log(new_obj)

function greeting1(username, password){
    return ("Hello " + username);
}


function greeting(username, password){
    console.log(`Hello ${username}`)
}

username= greeting("Mike2001")
console.log(username)

function valid(username, password){

    return (username.endsWith("@darwinbox.com") && username.length > 14);
}
console.log(valid("hello@darwinbox.com"))

//Loops
//1) for
//2) foreach
//3) for in
//4) for of
//5) while
//6) do while

arr.forEach(function(ele, key){
    console.log(ele, key);
}) //like enum

var arr = {
    id: 1,
    name: "random user",
    email: "random@example.com",
    age: 30
}

for(let key in arr){ //properties of the object
    console.log(key, arr[key])
}

var arr=[10,20,30,"string i"]
for(let key of arr){
    console.log(key)
}

var i = 0
while(i < 5){
    console.log(i)
    i += 1
}

var i = 5
do{
    console.log(i)
    i += 1
}while(i<5)

//function ---> Vanilla JS other is ESScript
function function_name(){
    console.log("greetings")
}
const ob = function_name()

//Auroma functions --> Describe it later
const greetings = function(username){
    console.log("hello user "+username)
}

greetings("Rajiv") //flexible--->brain of html

const my_object = {
    id: 1001,
    name: "Mike Ross",
    profession: "lawyer",
    age: 30,
    work: function(){
        console.log("solves cases");
    }
}
my_object.work()

const data = [
    {
        id: 1001,
        Name: "Emp 1",
        salary: 10000,
        level: 1,
        emp_age: 31
    },
    {
        id: 1002,
        Name: "Emp 2",
        salary: 10000,
        level: 6,
        emp_age: 37
    },
    {
        id: 1003,
        Name: "Emp 3",
        salary: 10000,
        level: 9,
        emp_age: 30
    },
    {
        id: 1004,
        Name: "Emp 4",
        salary: 10000,
        level: 81,
        emp_age: 31
    },
    {
        id: 1005,
        Name: "Emp 5",
        salary: 10000,
        level: 18,
        emp_age: 31
    },
]

for(let key in data){
    if(data[key]['level']>5){
        console.log("ID is: " + data[key].id)
        console.log("Name is: " + data[key].Name)
    }
}

//add
//remove 
//update 
//filter 


//add
data.push(
    {
        id: 1006,
        Name: "Emp 6",
        salary: 15000,
        level: 50,
        emp_age: 20
    }
)

for(key in data){
    console.log(data[key])
}

//remove
data.pop()
for(key in data){
    console.log(data[key])
}

for(key in data){
    if(data[key].id==1004)
    {
        delete(data[key])
    }
}

for(key in data){
    console.log(data[key])
}

//update
for(key in data){
    if(data[key].id==1001){
        data[key].id=1
    }
}

//spread operator
for(key in data){
    console.log(data[key])
}

//filter
const a = Object.keys(data)
console.log(a)

for(key in data){
    const a = Object.keys(data[key])
    console.log(a)
}


