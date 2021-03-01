var containerEle = document.body.querySelector(".container");
var num1 = Number(prompt("Enter a number"));
var num2 = Number(prompt("Enter another number"));
var sum = Symbol(prompt("Enter a math symbol +,-,\,*"));

var sum = (num1 + num2);
sum= Math.pow(sum)

if(isNaN(num1)){
  document.write( " Invaild number " + num1);
}else{
  document.write("the answer is " + num1);
}