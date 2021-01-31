// Two essential parts 
//1 BASE CASE
//2 Different input

function countDown(num){
    if(num <=0) {
        console.log('All done')
        return
    }
    num --;
    countDown(num)
}

function sumRange(num){
    if(num ===1) return 1;
    return num + sumRange(num -1);
}

//Call stack of the first function call waits at the bottom until the entire callstack is created 
// function call 3
// function call 2
// function call 1
//When it reaches the last call or BASE case the call stack gets poped off from the start or works backwards with the return values
//to get the first function call return




function collectOddValues(arr){
    let result = []


    function helper(helperInput){

        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 == 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))

    }

    helper(arr)

    return result
}
