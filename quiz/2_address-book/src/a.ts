function fetchItems(): string[] {
  let items = ['a', 'b', 'c'];
  return items;
}

let result = fetchItems();
console.log(result);

function fetchAnotherItems(): Promise<string[]> {
  let items = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
