var obj={
    num:3
}
var addTo=function (a,b,c){
    return this.num+a+b+c;
}
//call
console.log(addTo.call(obj,2,3,4));
//apply
var arr=[2,3,4];
console.log(addTo.apply(obj,arr))

//bind
var bound=addTo.bind(obj);
console.log(bound(2,3,4))

var Student={
    age:21
}
var printAge=function age(){
    return this.age
}
var bounding=printAge.bind(Student)
console.log(bounding())

//currying
let multiple=function(x,y){
    console.log(x*y)
}
let multiplyTwo=multiple.bind(this,2)
multiplyTwo(3)

let multiplyThree=multiple.bind(this,3)
multiplyThree(3)

let multiplesecond=function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyTwo1=multiplesecond(2)
multiplyTwo1(3)

let multiplyThree1=multiplesecond(3)
multiplyThree1(3)
