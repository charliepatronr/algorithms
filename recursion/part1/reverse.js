// write a function which accepts a string and returns a new string in reverse



function reverse(string){
    let length = string.length
    let arr= []
    function helper(arr, length, string){
        if(length < 0){
            return
        }
        arr.push(string[length - 1])
        return helper(arr, length - 1, string)
    }
    helper(arr, length, string)
    return arr.join('')

}

console.log(reverse('charlie'))

