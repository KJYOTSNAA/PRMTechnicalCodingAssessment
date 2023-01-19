Ques:Write a program to print a new number with digits reversed from the original one. The number provided will be greater than or equal to 0
Solu:
function reverseNumber(num) {
     if (num>0) {
        return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )     
}}
var n=prompt("Enter the number:",123456)
console.log(reverseNumber(n)) 

