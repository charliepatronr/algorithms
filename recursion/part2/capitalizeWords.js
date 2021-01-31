

//write a function which recieves an array of words and returns an array of those words capitalized 




function capitalizeWords (arr) {

    let target = []

    function capitalizer(arr) {

    if(arr.length === 1){
        target.push(arr[0].toUpperCase())
        return
    }
        let value = arr[0].toUpperCase()
        target.push(value)
        return capitalizer(arr.slice(1))
    }

    capitalizer(arr)

    return target

}


console.log(capitalizeWords(['testing', 'paola', 'charlie']))

