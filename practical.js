let b=4
console.log(b);

let y="hi"
console.log(y);

const arr=["item1","item2","item3"];
let items=["GFG","Geeks","G4G"];
let item2=["get",9]
// console.log(items);
// let new_Array=[];
// items.forEach(function(item) {
//   new_Array.push (item);
// });
// console.log(new_Array)
let new_Array2=[...item2];
console.log(new_Array2)

let text1="Hello"
let text2="World"
let text3="Have a nice day"
console.log(text1.concat(" ",text2," ",text3))

const food="I am feeling hungry today"
let newstr="eat"
let text5=food.slice(0,4);
let text6=food.slice(4);
console.log(text5+" "+ newstr+" "+text6)

let num=[2,8,90,45];
let w=num.map(function(num){
    return num*3
})
console.log(w);

let names=["Rose","Mercy","Linah"];
let x=["Lynette","Nathalie"]; 

console.log(names.concat(x));


let s=[2,4,6,8,10];
let t=[1,3,5,7,9];
let v= s.concat(t)
console.log(v)

let word=["I love korean actor"];
let text4=["Lee Min Ho"];
let text7=word.slice(0,7);
let text8=word.slice(7);
console.log(text7+" "+text4+" "+text8);

let words=["my name is Lynette"];
let p=["Kinga"];
let arr2=words.slice(0,6);
let arr3=words.slice(6);
console.log(arr2+" "+ p+" "+arr3);

var arr4 = ["apple", "mango", "apple","orange", "mango", "mango"];
console.log([...new Set(arr4)]);
console.log(arr4.filter((fruits,index) => {
    return arr4.indexOf(fruits) !== index
}));
console.log(arr4.filter((fruits,index) => {
    return arr4.indexOf(fruits) === index
}));

let arr5=["mangoe,pawpaw,pawpaw,melon,apple,melon"];
console.log([...new Set(arr5)]);
console.log(arr5.filter((fruits,index)=>{
return arr5.indexOf(fruits)!== index
}));
console.log(arr5.filter((fruits,index) =>{
return arr5.indexOf(fruits) ===index
}));







