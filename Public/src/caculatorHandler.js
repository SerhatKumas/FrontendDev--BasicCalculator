let firstNumber = 0;
let secondNumber = 0;
let transactionType = "";

let isTransactionTypeAssigned = false;
let isFirstTransaction = true;
let isResulted = false;

function transactionHandler(transaction_id){
if(!document.getElementById("resultScreen").innerHTML=="" && isFirstTransaction && !isResulted){
    if(!isTransactionTypeAssigned){
        firstNumber = parseInt(document.getElementById("resultScreen").innerHTML);
        transactionType = transaction_id;
        isTransactionTypeAssigned = true;
        document.getElementById("resultScreen").innerHTML="";
        isFirstTransaction = false;
    }
    else{
        alert("Transaction type is already chosen : "+transactionType);
    }
}
else{
    alert("Please enter number or clear the calculator...");
}
}

function numberHandler(button_id){
    if(!isResulted){
    document.getElementById("resultScreen").innerHTML += String(button_id);
    }
    else {
        alert("To do new calculation, clear the calculator");
    }
}

function resetCalculator(){
    firstNumber = 0;
    secondNumber = 0;
    transactionType = "";

    isTransactionTypeAssigned = false;
    isFirstTransaction = true;
    isResulted = false;
    document.getElementById("resultScreen").innerHTML = "";
}

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