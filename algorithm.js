function unusedID(arr){
    let answer = -1
    if(arr.length == 0) return 0
    
    return answer
}

console.log('unusedID([]) = 0 // ', unusedID([]))
console.log('unusedID([2, 10, 9, 16, 20]) = 1 // ', unusedID([]))
console.log('unusedID([16, 12, 6, 4, 0]) = 1 // ', unusedID([]))
console.log('unusedID([18, 17, 14, 14, 3, 10]) = 0 // ', unusedID([]))
console.log('unusedID([17, 7, 0, 3, 13]) = 1 // ', unusedID([]))
console.log('unusedID([13, 10, 15, 11, 11, 6]) = 5 // ', unusedID([]))
console.log('unusedID([14, 1, 3, 17, 7]) = 0 // ', unusedID([]))