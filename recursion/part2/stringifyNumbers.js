

// write a function which takes in an object and finds all of the values which are nuymbers and converts them to strings 

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


function stringifyNumbers(obj) {

    let newObj = {}
    console.log(obj , 'OBJECT')
    for(let prop in obj){
        console.log(newObj)
        if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])){
            console.log('STRINGIFY CALL')
            newObj[prop] = stringifyNumbers(obj[prop])
        } else if(typeof obj[prop] === 'number'){
            console.log('Stringifying number')
            newObj[prop] =  obj[prop].toString();
        } else {
            newObj[prop] = obj[prop]
        }
    }

    return newObj

}


console.log(stringifyNumbers(obj))