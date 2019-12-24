// Your code goes here
let a = prompt('Enter A','');
let b = prompt('Enter B','');
let c = prompt('Enter C','');
if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("input values should be ONLY numbers")
}else if(a<=0 || c<=0 || b<=0){
           alert("A triangle must have 3 sides with a positive definite length"); 
        } else if(a + b < c || c + a < b || b + c < a){
            alert("Triangle doesn’t exist");
            console.log('Triangle doesn’t exist');
        } else if(a===b && b===c && c===a){
            console.log('This is equilateral triangle');
        } else if (a===b || b===c || c===a){
            console.log('This is isosceles triangle');
        } else if(a!==b && b!==c && c!==a){
            console.log('This is scalene triangle')
        }