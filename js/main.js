//backgroung color effect button

function changebackground(){
	document.getElementById('light').style.backgroundColor = 'lightblue' ; 
}
// change background color for whole body..
function changebackground(){
	document.body.style.backgroundColor = 'dimdark';
}
//deposit system function
document.getElementById('deposit').addEventListener('click',function(){
    const depositTotal = document.getElementById('depo-num');
    const depositNewAmount = parseFloat(depositTotal.value);
    const confirmDiposit = document.getElementById('total-deposit');
    const previesDeposit =parseFloat(confirmDiposit.innerText);
    confirmDiposit.innerText=depositNewAmount + previesDeposit;
    depositTotal.value="";
    // total balance system 
    const previesBalance = document.getElementById('balance');
    const previesBalanceNumber = parseFloat(previesBalance.innerText);
    previesBalance.innerText = previesBalanceNumber + depositNewAmount;
})
//withdraw system function
document.getElementById('withdraw').addEventListener('click',function(){
    const inputAmount = document.getElementById('with-num');
    const totalInput = parseFloat(inputAmount.value);
    const showAmount = document.getElementById('total-withdraw');
    const NewShowAmount = parseFloat(showAmount.innerText);
    showAmount.innerText= totalInput + NewShowAmount;
    inputAmount.value='';
    const previesBalance = document.getElementById('balance');
    const previesBalanceNumber = parseFloat(previesBalance.innerText);
    previesBalance.innerText = previesBalanceNumber - totalInput;

})

