//Write a function which takes in an array of numbers and returns the product of them all



function productOfArray(arr){
    let product = 1

    function helper(arr){
        if(!arr.length){
            return;
        }
        product *= arr[0]
        return helper(arr.slice(1))
    }
    helper(arr)
    
    return product

}


console.log(productOfArray([1,2,3,4,5]))