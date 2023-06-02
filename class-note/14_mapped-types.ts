type IHeroes = 'Hulk' | 'Capt' | 'Thor';
// mapped 기본 형태
// type HeroAges = { [ in Heroes]: }
// K => 타입 변수
type IHeroAges = { [K in IHeroes]: number };

const ages: IHeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000
}

// for in 반복문 코드
let arr = ['a', 'b', 'c'];
for (let key in arr) {
  console.log(key); // 0 -> 1 -> 2
}