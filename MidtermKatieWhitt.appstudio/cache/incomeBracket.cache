
btnSubmit.onclick=function(){
  let income = inptIncome.value
  let bracket = `With your income of $${income}, you are in a tax bracket of `
    if (income < 30000) {
   lblBracket.textContent = bracket + '8%'
    } else if (income < 99999 && income >= 30000) {
   lblBracket.textContent = bracket + '15%'
    } else if (income >= 99999) {
   lblBracket.textContent = bracket + '25%'
  }
}


btnGoAgain.onclick=function(){
  lblBracket.textContent = "Enter another income: "
}
