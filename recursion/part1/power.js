


// Power, write a function called power which accepts a base and an exponent. The function should return the power of the base to the 
//exponent. Function should mimic Math.Pow() do not worry about negative bases and exponents
function power (num, exponent) {
    if(exponent == 0){
        return 1;
    }
    return num * power(num, exponent - 1)
}


console.log(power(2,2))