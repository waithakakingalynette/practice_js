function dividedArray(g){
    if(g.length<= 1){
        return g;
    } 
    let middle=Math.floor(g.length/2);
    let left=g.slice(0,middle);
    let right=g.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(dividedArray(left),dividedArray(right));

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
let g=[2,4,6,8,10,3,5,7,9];
console.log(dividedArray(g));
//2.

function divdeArray(num){
    if(num.length <=1){
        return num;
    }
    let middle=Math.floor(num.length/2);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(divdeArray(left),divdeArray(right));

}

function sortedArray(left,right){
    let emptyArr2=[];
    while(left.length && right.length){
        if(left[0]< right[0]){
            emptyArr2.push(left.shift());
        }
        else{
            emptyArr2.push(right.shift());
        }
        }
        return[...emptyArr2,...left,...right];
    }
    let num=[20,4,5,67,2,1];
    console.log(divdeArray(num));

//3.
    function binary(num1,target){
        let left=0
        let right=num1.length-1
        while(left<=right){
            let middle=Math.floor((left+right)/2);
            if(num1[middle]=== target){
                return middle
            }
            else if(num1[middle]>target){
                 right=middle-1;
            }
            else{
                left=middle+1
            }
        }
        return null
    }

    let num1=[5,3,7,45,9,20,17];
    let target=20
    console.log(binary(num1,target))

//     function binary(num1,target1){
//         let left =0
//         let right=num1.length-1
//         while(left<=right){
//             let middle=Math.floor((left+right)/2);
//             if(num1[middle]===target1){
//                 return middle
//             }
//             else if (num1[middle]>target1){
//                 right=middle-1;
//             }
//             else{
//                 left=middle+1;
//             }
//         }
//         return null
//         }

//      let num1 =[1,2,3,4,5,6,7];
//      let target1=6;
//      console.log(num1,target) 

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

