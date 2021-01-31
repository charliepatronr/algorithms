//Multiple pointers 

//Creating pointers or values that correspond to an index or position
// and move towards the beginning, end or middle based on a certain condition 
// Very efficient for solving problems with minimal space complexity as well 

// Write a function which accepts a sorted array of integers. the function
// should find the first pair where the sum is 0. Return an array that includes both values that sum to zero, 
// or undefined if a pair does not exist

//naive solution
// O(n^2)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])

// O(n)
function sumZeroPointer(arr){
    let left = 0;
    let right = arr.lenght -1;
    
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right --;
        } else {
            left ++ ;
        }
    }
}
sumZeroPointer([-4,-3,-2,-1,0,1,2,5])


//COUNTING UNIQUE VALUES 

//Implement a function which  accepts a sorted array, and counts the unique values in the array. There can be negative values in the array, but ill will always be sorted


function countUniqueValues(arr){
    let i = 0;
    if(!arr[j]){
        return i
    }
   for(let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i ++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

 console.log(countUniqueValues([-2,-1,-1,0,1]))


