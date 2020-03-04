/*
let animals = ["dog","cat","horse","mouse","pig","cow","ferret","lizard","frog"]
 
let enter = prompt("Enter the name of an animal to add it to the array: ")
let newAnimal = enter.toLowerCase()
 
animals.push(newAnimal)
alert(`The last animal in the array is ${animals[animals.length - 1]}.`)
*/
/*
function calcAvgSquared(x,y,z){
    let calcAvgSquare = ((x + y + z)/3) * (z**2)
    return calcAvgSquare
}
 
let num1 = Number(prompt("Enter the first number: "))
let num2 = Number(prompt("Enter a second number: "))
let num3 = Number(prompt("Enter a third number: "))
 
let output = calcAvgSquared(num1,num2,num3)
alert(`The calculated average squared is ${output}.`)
*/
btnSubmit.onclick=function(){
  let income = inptIncome.value
  let bracket = `With your income of $${income}, you are in a tax bracket of `
    if (income < 30000) {
   lblBracket.value = bracket + '8%'
    } else if (income < 99999 && income >= 30000) {
   lblBracket.value = bracket + '15%'
    } else if (income >= 99999) {
   lblBracket.value = bracket + '25%'
  }
}


btnGoAgain.onclick=function(){
  lblBracket.value = "Enter another income"
}