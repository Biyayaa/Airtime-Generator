let network = document.getElementById("Network");
let amount = document.getElementById("Amount");
let rechargeCode = Math.floor(Math.random() * 10000000);

function submit() {
     if (network.value === '') {
        alert('Please pick a network provider'); 
     }
     else if (amount.value === '') {
        alert('Please enter amount');  
    }
    else if (network.value === '' && amount.value === '') {
        alert('Please pick a network provider and amount'); 
        
    }
    else{
        document.getElementById('generate').innerHTML = rechargeCode;
    }
    
}