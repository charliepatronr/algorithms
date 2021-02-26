
// PSUEDO CODE 

// function that accepts three arguments: 
// an array, start index, and an end index (these can default to 0 and the array length - 1, respectively )
// grab the pivot from the star of the array, 
// store the current pivot index in a varaib;le ( this will keep track of where the pivot, 
// should end up)

// Loop through the array from the start until the end 
    // if the pivot is grater than the current element, increment the pivot index
    // variable and then swaup the current element with the element at the pivot index 
    // swap the starting element (i. e the pivot) with the pivot index
    // return the pivot index






    function  pivot(arr, start=0, end= arr.length -1) {

        let pivotIndex = start + 1

        for(let i = pivotIndex; i <= end;  i  ++) {
            // console.log(arr[pivotIndex] , 'ARRAY PIVOT VALUE')
            // console.log(arr)

            if(arr[start] > arr[i]){
                let temp = arr[i]
                // console.log(arr[pivotIndex], 'ARR PIVOT VALUE')
                // console.log(pivotIndex, 'PIVOT INDEX')
                // console.log(arr[i], 'ARR I')

                arr[i] = arr[pivotIndex] 
                arr[pivotIndex] = temp
                pivotIndex +=  1

                // console.log('***************')
                // console.log(arr[pivotIndex], 'ARR PIVOT VALUE')
                // console.log(pivotIndex, 'PIVOT INDEX')
                // console.log(arr[i], 'ARR I')
                // console.log(arr)
            }
            // } else if (arr[pivotIndex] > arr[i]){
            //     temp = arr[i]
            //     arr[i] = arr[pivotIndex] 
            //     arr[pivotIndex] = temp
            // }
   

        }
        // arr.splice(pivotIndex, 1, arr[start])
        // console.log(arr, 'AFTER FIRST SPLICE')
        // console.log(arr.splice(start, 1), 'SpLICE')
        // console.log(arr)
        pivotIndex -= 1

        let swap = arr[start]
        arr[start] = arr[pivotIndex]
        arr[pivotIndex] = swap
        // console.log(pivotIndex, 'PIVOT INDEX')
        console.log(arr, 'ARR')
        return pivotIndex
    }


    // pivot( [ 4,8,2,1,5,7,6,3])

   console.log(pivot( [ 9,3,19,1,2,3,6,79,40,8]))
