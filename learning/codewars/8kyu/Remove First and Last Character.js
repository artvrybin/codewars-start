function removeChar(str){
    // return str.slice(1,-1)
return str.length > 2 ? str.substring(1, str.length -1) : ''
};

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));