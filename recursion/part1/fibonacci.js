
//Write a function which accepts a number and returns the nth number in the fibonacci sequence.


function fib(num){

    let arr= [1,1]

    function helper(num, arr){
        if(arr.length  === num){
            return
        }
        let sumArr = arr.slice(-2)
        let sum = sumArr[0] + sumArr[1]
        arr.push(sum)
        return helper(num, arr)
    }
    helper(num, arr)
    return arr[arr.length - 1]
  }

  console.log(fib(10))