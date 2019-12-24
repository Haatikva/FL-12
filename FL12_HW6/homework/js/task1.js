// Your code goes here
let a = prompt('Enter a','');
let b = prompt('Enter b','');
let c = prompt('Enter c','');
if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("invalid input data")
} else{
    let dyskr = Math.pow(b,2) - 4*a*c;
    console.log("D = ", dyskr);
    if(dyskr<0){
        console.log("no solution");
    } else if(dyskr===0){
        let x = (-b + Math.sqrt(dyskr)) / (2*a);
        console.log("x = ", x);
    } else{
        let x1 = (-b + Math.sqrt(dyskr)) / (2*a);
        let x2 = (-b - Math.sqrt(dyskr)) / (2*a);
        console.log("x1 = ", x1, "x2 = ", x2);
    }  
}