function unusedID(arr){
    if(arr.length == 0) return 0
    arr.sort((a,b)=>a-b)
    let highest = arr[arr.length-1]
    for(let i=0;i<highest;i++){
        if (!arr.includes(i)) return i
    }
    return highest+1
}

console.log('unusedID([]) = 0 // ', unusedID([]))
console.log('unusedID([2, 10, 9, 16, 20]) = 0 // ', unusedID([2, 10, 9, 16, 20]))
console.log('unusedID([16, 12, 6, 4, 0]) = 1 // ', unusedID([16, 12, 6, 4, 0]))
console.log('unusedID([18, 17, 14, 14, 3, 10]) = 0 // ', unusedID([18, 17, 14, 14, 3, 10]))
console.log('unusedID([17, 7, 0, 3, 13]) = 1 // ', unusedID([17, 7, 0, 3, 13]))
console.log('unusedID([13, 10, 15, 11, 11, 6]) = 0 // ', unusedID([13, 10, 15, 11, 11, 6]))
console.log('unusedID([14, 1, 3, 17, 7]) = 0 // ', unusedID([14, 1, 3, 17, 7]))
console.log('unusedID([0, 1, 2, 3, 4]) = 5 // ', unusedID([0, 1, 2, 3, 4]))