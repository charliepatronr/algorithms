//write a recursive function which accepts an array of arrays and returns a new array with all the values 
//flattened




// function flatten(arr){
//     let newArr = []

//     function helper(arr){
//         console.log(arr)
//         if(arr.length === 0){
//             console.log('entered if')
//             return 
//         }
//         if(Array.isArray(arr[0])){
//             console.log('entered is array')
//             return helper(arr[0])
//         } else {

//             console.log('ELSE ')
//             let arr2 = arr.splice(0, 1)
//             console.log(arr2, 'arr2 ')
//            newArr = newArr.concat(arr2)
//            console.log(newArr)
//             return helper(arr)
//         }
//     }

//     helper(arr)
//     return newArr

// }



function flatten(oldArr){
    var newArr = []
    for(var i = 0; i < oldArr.length; i++){
        console.log(oldArr, 'arr')
        if(Array.isArray(oldArr[i])){
        console.log('entered is array')
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            console.log('ELSE ')

            newArr.push(oldArr[i])
        }
    } 
    console.log(newArr, 'NEW ARR')
    return newArr;
  }
  

// flatten([ [1],[2],[3] ])