// 98. もうひとつの Generic 関数
function merge<T extends {}, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log('mergedObject: ', mergedObject);

// 型があいまいのため`length`でエラーが表示される
// function countAndDescribe<T>(element: T) {
//   let descriptionText = '値がありません';
//   if (element.length > 0) {
//     descriptionText = '値は' + element.length + '個です';
//   }
//   return [element, descriptionText];
// }

interface Lengthy {
  length: number;
}
// 型があいまいのため`length`でエラーが表示される
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('お疲れ様です'));
