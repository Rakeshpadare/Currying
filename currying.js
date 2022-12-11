// currying in js

// let multiply= function(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo= multiply.bind(this,2);// here x is 2
// multiplyByTwo(6)

// let multiplyByFour=multiply.bind(this,6);
// multiplyByFour(7)

// using function closure

let multiply=function(x){
    return function(y){
        console.log(x*y)
    }
}
let multiplyByTwo= multiply(2);// here x is 2
multiplyByTwo(10)
