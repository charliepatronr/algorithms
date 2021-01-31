// This pattern uses objects or sets to collect values / frequencies of values

// this can often avoid the need for nested loops
// or O(n^2) operations with arrays/ strings
 

//  write a function same that accepts 2 arr 
//  the function should return true if every value in the arr has its
//  corresponding value squared in the second arr 
//  the frequency of values must be the same


// same([1,2,3] , [4,1,9]) // true 
// same([1,2,3] , [1,9]) // false 
// same([1,2,1] , [4,4,1]) // false (must be the same frequency)


 
 //naive solution


 function same(arr1, arr2) {
     if(arr1.length !== arr2.length) {
         return false
     }

     for (let i = 0; i < arr1.length; i ++) {
         let correctIndex = arr2.indexOf(arr1[i] ** 2)
         if(correctIndex === -1 ){
             return false;
         }
         arr2.splice(correctIndex, 1)
     }
     return true;
 }


 // frequency pattern solution 

 /// uses 3 seperate loops instead of nested
 // uses objects to quickly compare to another object representing both arrays 
 // 3n or 0(n)
 function sameFrequency(arr1, arr2) {
     if(arr1.length !== arr2.length){
         return false;
     }
     let frequencyCounter1 = {}
     let frequencyCounter2 = {}
     
     for(let val of arr1){
         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
     }
     for(let val of arr2) {
         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
     }

     for(let key in frequencyCounter1){
         if(!(key ** 2 in frequencyCounter2)){
             return false
         }
         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
             return false
         }
     }
     return true
 }


//  function validAnagram(word1, word2) {
//      let anagram1 = {}
//      let anagram2 = {}

//      if(word1.length !== word2.length){
//          return false
//      }

//      for(let i= 0; i < word1.length; i++) {
//          anagram1[i] = word1[i];
//      }

//      for (let i = word2.length - 1; i >= 0; i --) {
//         //  console.log(word2)
//         //  console.log(word2[i])
//         //  console.log(i)
//          anagram2[word2.length - 1 - i] = word2[i];
//      }
//     //  console.log(anagram1)
//     //  console.log(anagram2, 'anagram 2')

//      for(let val in anagram1){
//         //  console.log(anagram1[val])
//         //  console.log(anagram2[val])
//          if(anagram1[val] !== anagram2[val]){
//              return false;
//          }    
//      }
//      return true
//  }

// 3n => O(n)
function validAnagram(word1, word2) {
    let anagram1 = {}
    let anagram2 = {}

    if(word1.length !== word2.length){
        return false
    }

    for( let val in word1) {
        anagram1[word1[val]] = (anagram1[word1[val]] || 0) + 1
    }

    for(let val in word2) {
        anagram2[word2[val]] = (anagram2[word2[val]] || 0) + 1
    }

    for(let val in anagram1){
        if(anagram1[val] !== anagram2[val]){
            return false;
        }    
    }
    return true
}

validAnagram('paola', 'alopa')










//Divide and Conquer

//This pattern involves dividing a data set into smaller chinks and then repeating a process with a subset of data.

//This pattern can tremendously decrease time complexity


//EXAMPLE

// Given a SORTED array of integers, write a function called search, that accepts a value and returns the index where 
//the value passed to the function is located. 
//If the value is not found, return -1

//using BINARY SEARCH 
