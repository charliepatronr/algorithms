

// write a recursive function that given an array of strings will capitalize the first letter of a string in the array



// function capitalizeFirst (array) {
//     if (array.length === 1) {
//       return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }

//     // console.log(array.slice(0, -1) , 'ARRAY SLICE -1 ')
//     const res = capitalizeFirst(array.slice(0, -1));
//     // console.log(res)
//     // console.log(array.slice(array.length - 1)[0][0].toUpperCase())
//     // console.log(array.length)
//     // console.log(array.slice(array.length-1)[0].substr(1), 'SUBSTR')
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     res.push(string);
//     return res;
//   }


//   console.log(capitalizeFirst(['taco', 'coffee', 'cellphone', 'backpack']))



function capitalizeCharlie(arr){

    let target = []

    function helper(arr) {
        if(arr.length === 1){
            return target.push( arr[0][0].toUpperCase() + arr[0].substr(1))
        }
        let value = ''
        console.log(arr, 'ARR')
        value = arr[0][0].toUpperCase() + arr[0].substr(1)
        target.push(value)
        console.log(value)
        console.log(target)
        console.log(arr.slice(1), 'ARRAY PASSED INTO RECURSION')
        return helper(arr.slice(1))
    }

    helper(arr)
    return target


}
