function sortstring(arr){
    return arr.sort((a, b)=> a.length - b.length);
}

console.log(sortstring(["apple", "banana", "cherry", "date"]))

//O/P->[ 'date', 'apple', 'banana', 'cherry' ]
