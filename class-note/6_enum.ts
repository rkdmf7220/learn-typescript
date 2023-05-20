// number enum
enum Shoes {
  Nike = 10,
  Adidas,
  etc
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

// string enum
enum Caps {
  Nike = '나이키',
  Adidas = '아디다스'
}
let myCaps = Caps.Nike
console.log(myCaps); // '나이키'

enum Answer {
  Yes = 'Y',
  No = 'N'
}
function askQuestion(answer: string) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.')
  }
  if (answer === Answer.No) {
    console.log('오답입니다.')
  }
}
askQuestion(Answer.Yes)
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('y');
