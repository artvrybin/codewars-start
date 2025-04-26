function dramameter(room) {
  // const peopleMap = {};
  // const scores = {};

  // Собираем мапу и инициализируем счёт
  // room.forEach(person => {
  //   const [name, partner, friends, lovers] = person;
  //   peopleMap[name] = { partner, friends, lovers };
  //   scores[name] = 0;
  // });

  const [peopleMap, scores]  = room.reduce(([map, scores], [name, partner, friends, lovers])=> {
    map[name] = { partner, friends, lovers };
    scores[name] = 0;
    return [map, scores];
  }, [{},{}])

  for (const name in peopleMap) {
    const { partner, friends, lovers } = peopleMap[name];

    // Rule 1: Lovers while partnered
    if (partner) {
      scores[name] += lovers.length;

      // Rule 2: Lover is a friend of partner
      const partnerFriends = peopleMap[partner]?.friends || [];
      lovers.forEach(lover => {
        if (partnerFriends.includes(lover)) {
          scores[name] += 1;
        }
      });
    }

    // Rule 3: Lover is partner of a friend
    friends.forEach(friend => {
      const friendPartner = peopleMap[friend]?.partner;
      lovers.forEach(lover => {
        if (lover === friendPartner) {
          scores[name] += 1;
        }
      });
    });

    // Rule 4: Completely uninvolved
    if (!partner && lovers.length === 0) {
      scores[name] += 1;
    }
  }

  // Tommy's Drama Meter
  const totalDrama = Object.values(scores).reduce((sum, val) => sum + val, 0);
  if (totalDrama === 0 && scores.hasOwnProperty("Tommy")) {
    scores["Tommy"] += 5;
  }

  return scores;
}

console.log(dramameter([
  ["Alice", "Bob", ["Charlie"], ["David"]],
  ["Bob", "Alice", ["Eve"], ["Charlie"]],
  ["Charlie", null, ["Alice", "Bob"], []],
  ["David", null, [], ["Alice"]],
  ["Eve", null, ["Bob"], []],
  ["Tommy", null, [], []]
]));