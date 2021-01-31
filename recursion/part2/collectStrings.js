

// write a function which accepts an object and returns an array of all values in the object that have a typeof string


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj){
    let newArr = []


    function helper(obj){
        for(let prop in obj){
            console.log(newArr, ' NEW ARR')
            if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])){
                console.log('COLLECT CALL')
                return helper(obj[prop])
            } else if(typeof obj[prop] === 'string'){
                console.log('Stringifying number')
                newArr.push(obj[prop]);
            }
        }
    }
    console.log(obj , 'OBJECT')
    helper(obj)
    return newArr

}

console.log(collectStrings(obj))
