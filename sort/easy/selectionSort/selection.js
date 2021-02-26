


function selectionSort(arr){

    function swap(value1, value2, arr){
        temp = arr[value1]
        arr[value1] = arr[value2]
        arr[value2] = temp
    }

    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j ++){
            if( arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== arr[i]){
            swap(i, min, arr)
        }
    }

    return arr
}


console.log(selectionSort([5,8,3,1,0,25,30,17]))