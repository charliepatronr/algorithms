



// psuedocode 


// create an empty array take a look at the smallest values in each input array 
// While there are still values we haven't looked at 
//     If the value in the first array is smaller than the value in the second array push the value 
//     in the first array into our results and move on to the next value in the first array
//     if the value in the first array is larger than the value in the second array, push the value
//     in the second array into our results and move on the the next value in the second array
//     Once we exhaust one array, push in all remaninng values from the other array


// function merge(arr1, arr2){
//     let i=0;
//     let j=0;
//     let newArr = []
//     while(i < arr1.length) {
//         while(j < arr2.length){
//             if(arr2[j] > arr1[i]){
//                 newArr.push(arr1[i])
//                 i ++;
//                 console.log(newArr, i, 'iiiiiii')

//             } else if( arr1[i] > arr2[j]){
//                 newArr.push(arr2[j])
//                 j ++;
//                 console.log(newArr, j, 'jjjjjjjjj')

//             } 
//             if(i >= arr1.length){
//                 console.log('FINAL I')
//                 newArr = newArr.concat(arr2.slice(j))
//                 break
//             }
//             if( j >= arr2.length ){
//                 console.log('FINAL J')
//                 newArr = newArr.concat(arr1.slice(i))
//                 break
//             }
    

//         }

//     }
//     return newArr
// }


// REFACTORED VERSION


function merge(arr1, arr2){
    let i=0;
    let j=0;
    let newArr = []
    while(i < arr1.length &&  j < arr2.length ) {
        if(arr2[j] > arr1[i]){
            newArr.push(arr1[i])
            i ++;
        } else{
            newArr.push(arr2[j])
            j ++;
        }
    }
    
    // if(i >= arr1.length){
    //     newArr = newArr.concat(arr2.slice(j))
    // }
    // if( j >= arr2.length ){
    //     newArr = newArr.concat(arr1.slice(i))
    // }

    // OR WITH OTHER WHILE LOOPS if you can't use splice or other similar function

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


console.log(merge([1,2,5,9], [10,20,21,30]))