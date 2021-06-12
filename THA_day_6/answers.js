/*Write a JavaScript function to check whether an input is an array or not*/
const is_array=(isArr)=>{
  return Array.isArray(isArr);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// ************Part-2*********
/*Write a JavaScript function to clone an array
Test Data :*/
const array_Clone=(arr)=>{
  let newArr=[];
  arr.forEach((e)=>{
    newArr.push(e);
  })
  return newArr;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.*/
const first =(arr,num=0)=>{
  if (num===0){
    return arr[0];
  }
  if(num<0){
    return [];
  }
  return arr.slice(0,num);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


/*Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
*/
const joinStr=(arr)=>{
  return arr.toString(',')
}
myColor = ["Red", "Green", "White", "Black"];
console.log(joinStr(myColor));


/*Write a JavaScript program to find the most frequent item of an array*/

const mxTime=(arr)=>{
  arr=arr.sort();
  let p=1;
  let q=1;
  let c=arr[0];
  arr.slice(1,arr.length).forEach((e,i)=>{
    if( e!== arr[i]){
      q=1;
    }
    else{
      q=q+1;
    }
    if (q>p){
      p=q;
      c=e;
    }
    
  })
  return [c,p]
}
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mt=mxTime(arr1);
console.log(mt[0]),`(${mt[1]} times)`;