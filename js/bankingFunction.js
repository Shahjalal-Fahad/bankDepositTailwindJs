
function amountInput(inputId){
    const inputValue=document.getElementById(inputId);
    const inputAmountValue=inputValue.value; 
    const inputAmount=parseFloat(inputAmountValue);
    inputValue.value='';
    return inputAmount;

}

function updateField(totalFieldId,depositAmount){
    const previousAmountText=document.getElementById(totalFieldId);
    const previousAmountTextValue=previousAmountText.innerText;
    const previousAmount=parseFloat(previousAmountTextValue);
    const totalAmount=depositAmount+previousAmount;
    previousAmountText.innerText=totalAmount;
}
function currenBalance(){
    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalance=parseFloat(balanceTotalText);
    return previousBalance;
}

function updateBalance(depositAmount,isAdd){
    
    const previousBalance=currenBalance();
    const balanceTotal= document.getElementById('balance-total');
    if(isAdd==true){
        balanceTotal.innerText=previousBalance+depositAmount;
    }
    else{
       balanceTotal.innerText=previousBalance-depositAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){

    const depositAmount=amountInput('deposit-input');
    if(depositAmount>0){
        updateField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);

    }


});

//withdraw part

document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdraw=amountInput('withdraw-input');
    const currentBalance=currenBalance();
    if(withdraw>0 && withdraw<currentBalance){
        updateField('withdraw-total',withdraw);
        updateBalance(withdraw,false);

    }
    else{
        window.alert("You do not have enough money!!");
    }
});