
// first implementation




function bubble(arr){

    function swap(value1, value2, arr){
        temp = arr[value1]
        arr[value1] = arr[value2]
        arr[value2] = temp
    }

    for(let i= arr.length -1; i>=0 ; i--){

        for(let j = 0; j <= i - 1; j++ ){
            if(arr[j] > arr[j + 1]){
                swap(j, j+1, arr)
                // temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
            }
        }
    }
    return arr
}


console.log(bubble([37,45,29,8]))

//Opmtimized bubble sort
// uses conditional to avoid unecessary loops and comparisons 
function bubble(arr){

    let noSwaps
    for(let i= arr.length -1; i>=0 ; i--){
        noSwaps = true
        for(let j = 0; j <= i - 1; j++ ){
            if(arr[j] > arr[j + 1]){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}