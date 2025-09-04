function dnaStrand(dna){
    const complementMap = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    return dna.split('').map(base => complementMap[base]).join('');

}

console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"
console.log(dnaStrand("")); // ""