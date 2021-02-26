


//Complete merge Sort 


//Break up the array into halves until you have arrays that are empty or have one element
//Once you have smaller sorted arrays, merge those arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array




// function mergeSort(arr) {

//     function merge(arr1, arr2){
//         let i=0;
//         let j=0;
//         while(i < arr1.length &&  j < arr2.length ) {
//             if(arr2[j] > arr1[i]){
//                 newArr.push(arr1[i])
//                 i ++;
//             } else{
//                 newArr.push(arr2[j])
//                 j ++;
//             }
//         }
//         while( i < arr1.length){
//             newArr.push(arr[i])
//             i++;
//         }
    
//         while( j < arr1.length){
//             newArr.push(arr[j])
//             j++;
//         }
    
    
//         return newArr
//     }


//     let target = []


//     function helper(arr) {



//         console.log(arr, 'ARRAY ENTERING')
//         let middle = Math.floor(arr.length / 2)
//         console.log(middle, 'MIDDLE')

//         if(arr.length <= 1){
//             console.log(arr, 'RETURN ARR PUSHED IN')
//             target.push(arr)
//             debugger
//             return
//         } 
    
//         let left = arr.slice(0, middle)
//         console.log(left, 'LEFT')
//         let right = arr.slice(middle)
//         console.log(right, 'RIGHT')

//         helper(left)
//         helper(right)


//     }

//     helper(arr)
//     console.log(target)






//     while(target.length <=  arr.length){
        
//     }

//     return target
    
// }

// console.log(mergeSort([9,1,3,8,5]))

function merge(arr1, arr2){
    let i=0;
    let j=0;
    while(i < arr1.length &&  j < arr2.length ) {
        if(arr2[j] > arr1[i]){
            newArr.push(arr1[i])
            i ++;
        } else{
            newArr.push(arr2[j])
            j ++;
        }
    }
    while( i < arr1.length){
        newArr.push(arr[i])
        i++;
    }

    while( j < arr1.length){
        newArr.push(arr[j])
        j++;
    }


    return newArr
}


function mergeSort(arr) {
    

    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(left, right)



}