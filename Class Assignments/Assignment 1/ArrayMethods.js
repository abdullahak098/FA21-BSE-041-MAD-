// 1)Array Length Method
let courses = ["HTML", "CSS", "JavaScript", "React"]; 
  
//Accessing the Array Length 
console.log(courses.length);

// 2) Array toString() Method
let str = courses.toString(); 
  
console.log(str);

// 3) Array join() Method
console.log(courses.join('|'));

// 4) Array delete Operator
let emp = {  
    firstName: "Raj",  
    lastName: "Kumar",  
    salary: 40000  
}  
  
console.log(delete emp.salary);  
console.log("")
// 5) Array concat() Method
let arr1 = [11, 12, 13]; 
let arr2 = [14, 15, 16]; 
let arr3 = [17, 18, 19]; 
  
let newArr = arr1.concat(arr2, arr3); 
console.log(newArr);

//6) Array flat() Method
const arr4 = [['1', '2'], ['3', '4', '5',['6'], '7']]; 
  
// Flat the multilevel array 
const flatArr= arr.flat(Infinity); 
console.log(flatArr);

// 7) Array.push() Method

let numArr1 = [10, 20, 30, 40, 50]; 
  
//Adding elements at the end of an array 
numArr.push(60); 
numArr.push(70, 80, 90); 
console.log(numArr); 
  
  
let strArr1 = ["piyush", "gourav", "smruti", "ritu"]; 
strArr.push("sumit", "amit"); 
  
console.log(strArr);

//8) Array.unshift() Method
let numArr2 = [20, 30, 40]; 
  
// Adding element at the beginning 
// of an array 
numArr.unshift(10, 20); 
console.log(numArr); 
  
  
// Declaring and initializing arrays 
let strArr2 = ["amit", "sumit"]; 
  
// Adding element at the beginning 
// of an array 
strArr.unshift("sunil", "anil"); 
console.log(strArr);

// 9) Array.pop() Method
let numArr3 = [20, 30, 40, 50]; 
  
// Removing elements from end  
// of an array 
numArr.pop(); 
  
console.log(numArr); 
  
  
// Declare and initialize array 
let strArr4 = ["amit", "sumit", "anil"]; 
  
// Removing elements from end  
// of an array 
strArr.pop(); 
  
console.log(strArr);

// 10) Array.shift() Method
let numArr4 = [20, 30, 40, 50]; 
  
// Removing elements from the  
// beginning of an array 
numArr.shift(); 
  
console.log(numArr); 
  
  
// Declare and initialize array 
let strArr5 = ["amit", "sumit", "anil"]; 
  
// Removing elements from the  
// beginning of an array 
strArr.shift(); 
  
console.log(strArr);

// 11) Array.splice() Method
let numArr = [20, 30, 40, 50]; 
  
// Removing an adding element at a  
// particular location in an array 
  
// Delete 3 elements starting from index 1 
numArr.splice(1, 3); 
  
// Insert 80, 90, 100 at starting index 1 
numArr.splice(1, 0, 3, 4, 5); 
  
console.log(numArr); 
  
  
// Declare and initialize array 
let strArr = ["amit", "sumit", "anil"]; 
  
// Delete two elements starting from index 1 
// and add three elements. 
strArr.splice(1, 2, "Geeks", "Geeks1", "Geeks2"); 
  
console.log(strArr);

//12) Array.slice() Method
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  
// Case 1: Extract the first 3 elements of the array 
const case1 = arr.slice(0, 3); 
console.log("First 3 Array Elements: ", case1); 
  
// Case 2: Extract the last 3 array elements 
const case2 = arr.slice(-3); 
console.log("Last 3 Array Elements: ", case2); 
  
// Case 3: Extract elements from middle of array 
const case3 = arr.slice(3, 7); 
console.log("Case 3: Extract elements from middle: ", case3); 
  
// Case 4: Start index is greater than end index 
const case4 = arr.slice(5, 2); 
console.log("Case 4: Start index is greater than end index: ", case4); 
  
// Case 5: Negative start index 
const case5 = arr.slice(-4, 9); 
console.log("Case 5: Negative start index: ", case5); 
  
// Case 6: Negative end index 
const case6 = arr.slice(3, -2); 
console.log("Case 6: Negative end index: ", case6); 
  
// Case 7: Only start index is provided 
const case7 = arr.slice(5); 
console.log("Case 7: Only start index is provided: ", case7); 
  
// Case 8: Start index and end index are out of range 
const case8 = arr.slice(15, 20); 
console.log("Case 8: Start and end index out of range: ", case8); 
  
// Case 9: Start and end index are negative 
// and out of range 
const case9 = arr.slice(-15, -10); 
console.log("Case 9: Start and end index are negative"
    + " and out of range: ", case9);

// 13) Array some() Method
function isGreaterThan5(element, index, array) { 
    return element > 5; 
} 
  
  
// Driver code 
// Original array 
let array = [2, 5, 8, 1, 4]; 
  
// Checking for condition in array 
let value = array.some(isGreaterThan5); 
  
console.log(value);

//14) Array reduce() Method
let arr6 = [88, 50, 25, 10]; 
  
// Perform reduce method 
let sub1 = arr.reduce(geeks); 
  
function geeks(total, num) { 
    return total - num; 
} 
  
console.log(sub);

// 15) Array map() Method
let arr = [4, 9, 16, 25]; 
  
// Performing map method 
let sub = arr.map(geeks); 
  
function geeks() { 
    return arr.map(Math.sqrt); 
} 
  
console.log(sub);

