
// write a recurse function that retuns the sum of all even unmbers in an object which may contain nested objects.

let obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }


  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };


function nestedEvenSum(obj) {
    let sum = 0
    console.log(obj , 'OBJECT')
    for(let prop in obj){
        console.log(prop, 'PROP')
        if(typeof obj[prop] === 'object'){
            console.log('NESTED SUM CALLED')
             sum += nestedEvenSum(obj[prop])
        } else if(obj[prop] % 2 === 0){
            console.log('SUM NOT OBJECT')
            sum += obj[prop]
        }
    }

    return sum

}

console.log(nestedEvenSum(obj2))