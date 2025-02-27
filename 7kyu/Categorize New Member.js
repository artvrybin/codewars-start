function openOrSenior(data) {

  // return data.map(member => member[0] >= 55 && member[1] >=7 ? "Senior" : "Open")

  // return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));

  let getOpenOrSenior = [];
  for(i=0; i<data.length; i++){
    if(data[i][0]>=55 && data[i][1]>7){
      getOpenOrSenior.push("Senior");
    }else{
      getOpenOrSenior.push("Open");
    }
  }
  return getOpenOrSenior;

}

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [21, 21],
    [45, 1],
    [61, 8],
    [59, 9],
    [60, 10],
  ])
);
console.log(
  openOrSenior([
    [12, 2],
    [55, 8],
    [60, 12],
    [21, 7],
    [45, 3],
    [58, 10],
  ])
);
