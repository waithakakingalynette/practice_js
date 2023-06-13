//Extract the last four characters from the string below;
//"extravaganza"
let y="extravaganza";
console.log(y[8],y[9],y[10],y[11]);
console.log(y.slice(-4))// it is appropriate to use slice ratrher than index form in
//instances that one has more characters such as (1000 and above)

let word="We have to trust and console ourselves that everything will be okay"
console.log(word.slice(-47)); // in slice even the spacing between numbers are counted.

//Insert the following string at the fourth index of the below variable:
//"eat"
const food = "The quick fox jumped over the lazy dog"
let a=["eat"];
let b=food.slice(0,4);
let c=food.slice(4);
console.log(b+" "+a+" "+c);

//Convert the following strings into the specified format:
//1. UpperCase: "wonderful"
//2. LowerCase: "amazing", "UndERneath"
const d=("wonderful");
const e= d.toUpperCase();
console.log(e);
const f=("amazing");
const g= f.toLowerCase();
console.log(g);

const h=("a Wonderful world");
const i= h.toUpperCase();
console.log(i);

// function dividedArray(num){
//     if(num.lenght<=1){
//         return num;
//     }
//     let middle=Math.floor(num.length/2);
//     let left=num.slice(0,middle);
//     let right=num.slice(middle);
//     console.log(left);
//     console.log(right);
//     return sortedArray(dividedArray(left),dividedArray(right));
// }

// function sortedArray(left,right){
//     let emptyArr=[];
//     while(left.length&&right.length){
//         if(left[0] < right[0]){
//             emptyArr.push(left.shift());
//         }
//         else{
//             emptyArr.push(right.shift());
//         }

//     }
//     return[...emptyArr,...left,...right];
// }
// let num = [45,12,6,89,2,5];
// console.log(dividedArray(num));

// function binary(num,target){
//     let left=0
//     let right=num.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2);
//         if(num[middle]== target){
//         return middle
//         }
//         else if(num[middle]>target){
//        right=middle-1
//         }
//         else{
//             left=middle+1
//         }
//     }
//     return null
// }
// let num = [45,12,6,89,2,5];
// target=6;
// console.log(binary(num,target));


//Given an array of unsorted numbers, return the index of the following target 
//if the target exists in the array using JavaScript. If the target is not found,
// return null
let num = [45,12,6,89,2,5]
let  target = 6

function mergesort(num){
    if(num.length <=1){
        return num;
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    console.log(left);
    console.log(right);

    return sortedArray(mergesort(left),mergesort(right))
}
