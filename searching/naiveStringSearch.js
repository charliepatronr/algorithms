
// Suppose you want to count the number of times a smaller string appears in a larger string 



// ex search for 'haha' in string
//harold said haha in hamburg 

//psuedo 
//Loop over longer string
// loop over shorter string 
// if characters don't mach break out of the inner loop 
// if the inner loop is completed and find a match increment match counter 
// return count 


function naiveString(string, target){
    let counter = 0
    for(let i=0; i<string.length; i++){

        for(let j=0; j< target.length; j++){

            if(string[i + j] !== target[j]){
                break
            } 
            // Dont need this && in conditional because the break comes before
            // string[i + j] !== target[j]
            if(j === target.length -1){
                counter += 1
            }

        }

    }
    console.log(counter)

    return counter

}


console.log(naiveString('asjqqowijd charlie laskd alksd charlie aslkdm asjknwqdm kljlkamdaslkm charlie', 'charlie'))

