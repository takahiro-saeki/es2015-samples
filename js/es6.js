let test = 'varとほぼ同じ使い方をするよ'
const apiData = "APIのパス"
//test(a,b) => return a * b;

//defaults(a = "defaults") => console.log(a)
/*
var template1 = `バックスラッシュで記述するよ`
template2(a,b) => {
  `引数がある場合はこのように${ a }みたいな感じで指定すると出来るよ！
  また、改行したり関数の実行もう出来るよ${ b }`
}
*/
let arrays = ['高坂穂乃果', '絢瀬 絵里', '南ことり', '園田海未', '星空凛', '西木野真姫', '東條希', '小泉花陽', '矢澤にこ'];
for (let i in arrays) {
   console.log(i);
}

for (let i of arrays) {
   console.log(i);
}
