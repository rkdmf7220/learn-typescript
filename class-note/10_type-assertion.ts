// 타입 단언(type assertion)
let a;
a = 20;
a = 'a'
let b = a as string;

// Control DOM API
// Not use type assertion
let span = document.querySelector('span');
if (span) {
  span.innerText;
}

// Use type assertion
let div = document.querySelector('div') as HTMLDivElement;
div.innerText;