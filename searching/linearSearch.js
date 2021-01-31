//indexOf
//includes 
//find
//findIndex 

//check elements one at a time to find if they are the value we are searching for
//otherwise linear search 

function linearSearch(arr, value){
    for(let i=0; i < arr.length; i ++){
        if(arr[i] === value) return i;
    }
    return -1
}





