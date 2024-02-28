// 1)1slice() Method
let A = 'Geeks for Geeks'; 
  
// Use the slice() method to extract a substring 
let b = A.slice(0, 5); 
let c = A.slice(6, 9); 
let d = A.slice(10); 
  
// Output the value of variable 
console.log(b); 
console.log(c); 
console.log(d);

// 2) substring() Method
let str = "Mind, Power, Soul"; 
  
// Use the substring() method to extract a substring  
let part = str.substring(6, 11); 
  
// Output the value of variable 
console.log(part); 


// 3) substr() Method
let str2 = "Mind, Power, Soul"; 
  
// Use the substr() method to extract a substring f 
let part2 = str2.substr(6, 5); 
  
// Output the value of variable 
console.log(part2);



//4) replace()
let str3 = "Mind, Power, Soul"; 
  
// Use the replace() method to replace the substring 
let part3 = str3.replace("Power", "Space"); 
  
// Output the resulting string after replacement 
console.log(part3); 


//5) replaceAll()
let str4 = "Mind, Power, Power, Soul"; 
  
// Use the replaceAll() method to replace all occurrences 
//of "Power" with "Space" in the string 'str' 
let part4 = str4.replaceAll("Power", "Space"); 
  
// Output the resulting string after replacement 
console.log(part4); 


//6) toUpperCase()
let gfg = 'GFG '; 
  
// Define another string variable  
let geeks = 'stands-for-GeeksforGeeks'; 
  
// Convert the string 'geeks' to uppercase using the toUpperCase() method 
console.log(geeks.toUpperCase()); 

//7) toLowerCase()

let gfg1 = 'GFG '; 
  
// Define a string variable  
let geeks1 = 'stands-for-GeeksforGeeks'; 
  
// Convert the string 'geeks' to lowercase using the toLowerCase() method 
console.log(geeks1.toLowerCase()); 


//8)concat() Method
let gfg2 = 'GFG '; 
let geeks2 = 'stands for GeeksforGeeks'; 
  
// Accessing concat method on an object 
// of String passing another object  
// as a parameter 
console.log(gfg2.concat(geeks2));


//9)  trim() Method
let gfg3 = 'GFG    '; 
let geeks3 = 'stands-for-GeeksforGeeks'; 
  
// Storing new object of string 
// with removed white spaces 
let newGfg = gfg3.trim(); 
  
// Old length 
console.log(gfg3.length); 
  
// New length 
console.log(newGfg.length)


//10) trimStart() Method
let str5 = "  Soul"; 
  
// Output the original value of the string  
console.log(str5); 
  
// Use the trimStart() method to remove leading whitespace from the string 'str' 
let part5 = str5.trimStart(); 
  
// Output the resulting string after removing leading whitespace 
console.log(part5); 


//11)trimEnd() Method
let str6 = "Soul  "; 
  
// Output the original value of the string 'str' 
console.log(str6); 
  
// Use the trimEnd() method to remove trailing whitespace from the string 'str' 
let part6 = str6.trimEnd(); 
  
// Output the resulting string after removing trailing whitespace 
console.log(part6); 



//12) padStart() Method
let stone = "Soul"; 
  
// Use the padStart() method to add padding characters "Mind " 
//to the beginning of the string 'stone'  
stone = stone.padStart(9, "Mind "); 
  
// Output the resulting string after padding 
console.log(stone); 



//13) padEnd() Method
let stone1 = "Soul"; 
  
// Use the padEnd() method to add padding characters 
//" Power" to the end of the string 'stone'  
stone1 = stone1.padEnd(10, " Power"); 
  
// Output the resulting string after padding 
console.log(stone1); 



//14) charAt() Method
let gfg4 = 'GeeksforGeeks'; 
let geeks4 = 'GfG is the best platform to learn and\n'+ 
'experience Computer Science.'; 
  
// Print the string as it is 
console.log(gfg4);  
  
console.log(geeks4);  
  
// As string index starts from zero 
// It will return first character of string 
console.log(gfg4.charAt(0));  
  
console.log(geeks4.charAt(5));


//15) charCodeAt() Method
let gfg5 = 'GeeksforGeeks'; 
let geeks5 = 'GfG is the best platform to learn and experience  Computer Science.'; 
  
// Return a number indicating Unicode 
// value of character at index 0 ('G') 
console.log(gfg5.charCodeAt(0)); 
console.log(geeks5.charCodeAt(5));


//16) split() Method
let gfg6 = 'GFG '
let geeks6 = 'stands-for-GeeksforGeeks'
  
// Split string on '-'.  
console.log(geeks6.split('-'))