

// binary search is a much faster form of search 

//Rather than elimintating one element at a time, you can eliminaste half of the remaining
//at a time 
//binary search only works for SORTED ARRAYS

//DIVIDE AND CONQUER 







function binarySearch(arr, element) {

    let start = 0;
    let end = arr.length -1
    let middle = 0


    while(arr[middle] !== element && start <= end){
        console.log(start, 'start')
        console.log(end, 'end')
        middle = Math.floor((start + end) / 2)
        console.log(arr.slice(start, end))
        console.log(arr[middle], 'MIDDLE')
        console.log(middle, 'MIDDLE element')
        if(element < arr[middle]){
            end = middle - 1
        } else {    
            start = middle + 1
        }

    }
    return  arr[middle] === element ? middle : -1;

}

// console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,49,44,64,79,84,86,95,96,98,99], 100))

console.log(binarySearch([1,2,3,4,5], 2))