//Given an array of unsorted numbers, return the index of the following target if
// the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
function divideArray(arr){
    if(arr.length<= 1) {
   return arr;
    }
    let middle=Math.floor(arr.length/2);
    let left=arr.slice(0,middle);
    let right=arr.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(divideArray(left),divideArray(right));

}

function sortedArray(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift());

        }
        else{
            emptyArr.push(right.shift());

        }
    }
    return [...emptyArr,...left,...right];
}

let arr=[3,10,2,50,1,4,6];
console.log(divideArray(arr));


function divideArray(num){
    if(num.length<= 1) {
   return num;
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(divideArray(left),divideArray(right));

}

function sortedArray(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift());

        }
        else{
            emptyArr.push(right.shift());

        }
    }
    return [...emptyArr,...left,...right];
}

// let num=[3,10,2,50,1,4,6];
// console.log(divideArray(num));


let num = [45,12,6,89,2,5];
console.log(divideArray(num));


function binary(num1,target){
    let left=0
    let right=num1.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]== target){
        return middle
        }
        else if(num[middle]>target){
       right=middle-1
        }
        else{
            left=middle+1
        }
    }
    return null
}

let num1 = [45,12,6,89,2,5];
let target=[6];
console.log(binary(num1,target));



function dividedarray(number){
    if(number.length<=1){
        return number;
    }
    let middle=Math.floor(number.length/2);
    let left=number.slice(0,middle);
    let right=number.slice(middle);
    console.log(left);
    console.log(right);
    return sortedarray(dividedarray(left),dividedarray(right));
}

function sortedarray(left,right){
    let emptyarr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyarr.push(left.shift());

        }
        else{
            emptyarr.push(right.shift());
        }
    }
    return[...emptyarr,...left,...right];
}
let number=[3,7,4,17,13,24,15];
console.log(dividedarray(number));


function binary(number1,target1){
    let left=0;
    let right=number1.length-1;
    while(left<=right){
     let middle=Math.floor((left+right)/2);
     if(number1[middle] == target1){
      return middle;
     }
     else if(number1[middle]>target1){
        right=middle-1
     }
     else{
        left=middle+1
     }
    }
    return null;
}

let number1=[3,7,4,17,13,24,15];
let target1=13;
console.log(binary(number1,target1))


//Given an unsorted array of numbers return the sorted array in descending order
function divideArray(arr1){
    if(arr1.length<= 1) {
        return arr1;

    }
    let middle=Math.floor(arr1.length/2);
    let left=arr1.slice(0,middle);
    let right=arr1.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(divideArray(left),divideArray(right));
}

function sortedArray(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArr.push(left.shift());
        }
        else{
            emptyArr.push(right.shift());
        }
    }
    return [...emptyArr,...left,...right];
}

let arr1=[123,89,5,23,9,56];
console.log(divideArray(arr1));
