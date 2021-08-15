// handle deposit button event

document.getElementById('deposit-button').addEventListener('click',function(){
    console.log('Deposit button clicked');
    //deposit input
    const depositInput=document.getElementById('deposit-input');
    const depositAmount=depositInput.value;
    // console.log(depositAmount);

    // deposit total
    const depositTotal=document.getElementById('deposit-total');
    const previousDeposit=parseFloat(depositTotal.innerText);
    const currentDeposit=parseFloat(depositAmount);
    const totalDeposit=previousDeposit+currentDeposit;
    depositTotal.innerText=totalDeposit;
    
    // total Balance
    
    const previousBalanceText=document.getElementById('total-balance');
    const previousBalance=parseFloat(previousBalanceText.innerText);
    const totalBalance=previousBalance+currentDeposit;
    previousBalanceText.innerText=totalBalance;
    
    // clear deposit input
    depositInput.value='';

    

});

// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click',function(){
    //total withdraw
    const previousWithdraw=document.getElementById('total-withdraw');
    const previousWithdrawText=previousWithdraw.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawText);
    const currentWithdraw=document.getElementById('withdraw-input');
    const currentWithdrawText=currentWithdraw.value;
    const currentWithdrawAmount=parseFloat(currentWithdrawText);
    const totalWithdraw=previousWithdrawAmount+currentWithdrawAmount;
    previousWithdraw.innerText=totalWithdraw;
    
    //totalBalance
    
    const previousBalanceAmount=document.getElementById('total-balance');
    // console.log(previousBalance);
    const previousBalanceTextAmount=previousBalanceAmount.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTextAmount);
    const totalBalanceAmount=previousBalanceTotal-currentWithdrawAmount;
    previousBalanceAmount.innerText=totalBalanceAmount;
    
    // clear withdraw input
    currentWithdrawText='';

});