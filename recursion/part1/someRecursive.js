

//write a recursive function which accepts an array and a callback. The function returns true if a single value 
//in the array returns true when passed to the allback. Otherwise return false.

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
    if(arr.length === 0){
        console.log('entered if')
        return false
    }
    if(callback(arr[0])){
        return true
    }
    return someRecursive(arr.slice(1), callback)
}



console.log(someRecursive([4,6,8], isOdd))