let firstNumber = 0;
let secondNumber = 0;
let transactionType = "";

//Boolean variable to check whether any transaction button is clicked -, + and so on
let isTransactionTypeAssigned = false;

//Boolean variable to check whether = is clicked and result is printed, if so user should clear the calculator
let isResulted = false;

//Transaction assigner method + - * / ^ 
function transactionHandler(transaction_id){
if(!document.getElementById("resultScreen").innerHTML=="" && !isResulted){
    if(!isTransactionTypeAssigned){
        firstNumber = parseInt(document.getElementById("resultScreen").innerHTML);
        transactionType = transaction_id;
        isTransactionTypeAssigned = true;
        document.getElementById("resultScreen").innerHTML="";
    }
    else{
        alert("Transaction type is already chosen : "+transactionType);
    }
}
else{
    alert("Please enter number or clear the calculator...");
}
}

//Number printer and assigner method
//In this calculator, 2 numbers are taken and requested transaction is done
function numberHandler(button_id){
    if(!isResulted){
    document.getElementById("resultScreen").innerHTML += String(button_id);
    }
    else {
        alert("To do new calculation, clear the calculator");
    }
}

//Reset or clear method for starting over and over to use calculator
function resetCalculator(){
    firstNumber = 0;
    secondNumber = 0;
    transactionType = "";

    isTransactionTypeAssigned = false;
    isFirstTransaction = true;
    isResulted = false;
    document.getElementById("resultScreen").innerHTML = "";
}

//Transaction handler method with 2 number and transaction type and prints into result screen
function calculate(){
    if(!document.getElementById("resultScreen").innerHTML=="" && !isResulted){
        secondNumber = parseInt(document.getElementById("resultScreen").innerHTML);
        switch(transactionType){
            case "add":
                document.getElementById("resultScreen").innerHTML = firstNumber+secondNumber;
                break;   
            case "substract":
                document.getElementById("resultScreen").innerHTML = firstNumber-secondNumber;
                break;
            case "multiple":
                document.getElementById("resultScreen").innerHTML = firstNumber*secondNumber;
                break;  
            case "divide":
                document.getElementById("resultScreen").innerHTML = firstNumber/secondNumber;
                break;
            case "expo":
                document.getElementById("resultScreen").innerHTML = firstNumber**secondNumber;
        }
        isResulted = true;
    }
    else{
        alert("Please enter number or clear the calculator...");
    }
}