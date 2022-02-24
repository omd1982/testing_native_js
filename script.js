/*
let num
console.log(num || 24) //24    
console.log(100 && 24) //24     
console.log(num && 24) //undefined 
*/
/*
let arr = []
for (var i = 0; i < 10; i++){     //если var  - то не работает!
  arr.push(function(){console.log(i)})
}
arr[5]() // - если var, то получаем все время 10 индекс при
// обращении к любому элементу

let arr2 = []
for ( var i = 0; i < 10; i++){     //если var  -  так работает!
 (function(j){
  arr2.push(function(){console.log(j)})
 })(i)
}
arr2[6]()
*/