var x=10
console.log(x)

console.log(x) //undefined
var x=10
console.log(x) //10
console.log(y) //error

var x
console.log(x)
x=10
console.log(x)
console.log(y)

const my_object1 = {
  id: 1001,
  name: "Mike Ross",
  profession: "lawyer",
  age: 30,
  work: function(){
      console.log("solves cases");
  }
}
my_object1.work()

const my_object2 = {
  id: 1001,
  name: "Mike Ross",
  profession: "lawyer",
  age: 30,
  work: function(){
      console.log("Sample cases");
  }
}
my_object2.work()

