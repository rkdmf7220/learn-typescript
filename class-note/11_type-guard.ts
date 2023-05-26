interface IDeveloper {
  name: string;
  skill: string;
}

interface IPerson {
  name: string;
  age: number;
}

function introduce(): IDeveloper | IPerson {
  return { name: 'Tony', age: 40, skill: 'Suit Making' }
}
let tony = introduce();
console.log(tony.name);
console.log(tony.age);
console.log(tony.skill);

// Use type assertion
if ((tony as IDeveloper).skill) {
  let skill = (tony as IDeveloper).skill;
  console.log(skill);
} else if ((tony as IPerson).age) {
  let age = (tony as IPerson).age;
  console.log(age);
}

// Use type guard
function isDeveloper(target: IDeveloper | IPerson): target is IDeveloper {
  return (target as IDeveloper).skill !== undefined
}

if (isDeveloper(tony)) {
  tony.skill
} else {
  tony.age
}