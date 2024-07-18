let currentBalance = 0;

alert("Welcome to Mobile Banking Application! Open Console to start")

// Adding Amount to balance
function adding(amount){
  currentBalance += amount
  return currentBalance.toFixed(2)
}

// withdrawing Amount to balance
function withdrawal(amount){
  currentBalance -= amount
  return currentBalance.toFixed(2)
}
// View balance
function balance(){
  console.log(`Your Current Balance is $${currentBalance}`)
}

function main() {
  do{
    let userInput = prompt("Menu Options: [A]dd, [W]ithdrawal, [C]heck Balance or [E]nd");
    let result = userInput.toUpperCase();
    if (result == 'A'){
      let amountAdd = parseFloat(prompt("Enter amount to be added."))
      adding(amountAdd)
      balance()
    } else if (result == "W") {
      let amountWithdraw = parseFloat(prompt("Enter amount to withdrawal."))
      if (amountWithdraw > currentBalance){
        console.log(`You can't withdrawal more than you have! Try withdrawing less than or equal to your current balance of $${currentBalance}.`)
      } else {
        withdrawal(amountWithdraw)
        balance()
      }
    } else if (result == "C") {
      balance()
    } else if (result == "E"){
      balance()
      console.log("Thank you for using our application today.");
      break
    } else {
      console.log("Invalid Input")
    }
  } while (true)
}

setTimeout(main, 10000);
