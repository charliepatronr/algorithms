

//write a function which returns true if the string returned is a palindrome



function isPalindrome(string) {

    let arr = string.split('')

    function helper(arr){
        if(arr.length >= 1){
            if(arr[0] === arr[arr.length - 1] && arr.length > 1){
                arr = arr.slice(1)
                arr.pop()
                return helper(arr)
            } else if(arr.length == 1) {
                return true
            } else {
                return false
            }
        } 
    }

    return helper(arr)

}


console.log(isPalindrome('tacocat'))