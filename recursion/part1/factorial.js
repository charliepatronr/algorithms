
//Factorial

//Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer
// and all the integers before it. 4! 4*3*2*1 = 24


function factorial(num){
    if(num === 1 ) return 1;
    return num * factorial(num - 1)
}