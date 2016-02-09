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

let promiseTest = new Promise ((resolve, reject) => {
  reject('エラー');
})

promiseTest.then(() => {
    alert('1秒経過した')
})

promiseTest.catch(function (error) {
    //alert(error)
    $('body').append('<p>テスト</p>')
})

let tryIt = function (successProbably) {
  return new Promise(function (resolve, reject) {
    var isSuccess = (Math.random() > 1 - successProbably)
    if (isSuccess) {
      resolve('Solved it!');
    } else {
      reject('Failed...');
    }
  });
}

Promise.all([tryIt(0.70), tryIt(0.70)]).then(function(array){
  array; // ["Solved it!", "Solved it!"]
});

var p1 = new Promise(function (resolveUser, rejectUser) {
  rejectUser('エラーですよ'); //promiseを棄却する
}).catch(function (m) {
  alert("catch");
  alert(m); //エラーですよ
})
console.log(p1);

module.exports = promiseTest;
