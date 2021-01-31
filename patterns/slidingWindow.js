// SLIDING WINDOW PATTERN 


//This pattern involves creating a window which can either be an array or a number from one position to another
// Depending on a certain condition, the window either increases or closes( and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.


//EXAMPLE 

// Write a function which accepts an array of integers and a number called n. The fucntion should calculate tha maximum sum of n 
// consecutive elements in the array



function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length) {
        return null;
    }

    for(let i=0; i < num; i ++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i< arr.length; i ++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,,3] ,3)