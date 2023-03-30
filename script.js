let network = document.getElementById("Network");
let amount = document.getElementById("Amount");
let rechargeCode = Math.floor(Math.random() * 10000000000000000);
let rechargePin = document.getElementById("code");

function submit() {
  if (network.value === "") {
    alert("Please pick a network provider");
  } else if (amount.value === "") {
    alert("Please enter amount");
  } else if (network.value === "" && amount.value === "") {
    alert("Please pick a network provider and amount");
  } else {
    rechargeCode = Math.floor(Math.random() * 10000000000000000);
    document.getElementById("generate").innerHTML = rechargeCode;
  }
}

function recharge() {
  if (rechargePin.value === "") {
    alert("Please enter a valid recharge pin");
  }
  else if (
    network.value === "mtn" &&
    rechargePin.value.startsWith("*555*") &&
    rechargePin.value.includes(rechargeCode) &&
    rechargePin.value.endsWith("#")
  ) {
    alert("Recharge of " + network.value + " " + amount.value + " succesful!!");
  } else if (
    network.value === "glo" &&
    rechargePin.value.startsWith("*123*") &&
    rechargePin.value.includes(rechargeCode) &&
    rechargePin.value.endsWith("#")
  ) {
    alert("Recharge of " + network.value + " " + amount.value + " succesful!!");
  } else if (
    network.value === "airtel" &&
    rechargePin.value.startsWith("*126*") &&
    rechargePin.value.includes(rechargeCode) &&
    rechargePin.value.endsWith("#")
  ) {
    alert("Recharge of " + network.value + " " + amount.value + " succesful!!");
  } else if (network.value === "9mobile" &&
  rechargePin.value.startsWith("*222*") &&
  rechargePin.value.includes(rechargeCode) &&
  rechargePin.value.endsWith("#")) {
    alert("Recharge of " + network.value + " " + amount.value + " succesful!!");
  }
 else if (network.value === "mtn" && !rechargePin.value.startsWith("*555*")) {
  alert("Invalid USSD for MTN");
} else if (network.value === "glo" && !rechargePin.value.startsWith("*123*")) {
  alert("Invalid USSD for Glo");
} else if (network.value === "airtel" && !rechargePin.value.startsWith("*126*")) {
  alert("Invalid USSD for Airtel");
} else if(network.value === "9mobile" && !rechargePin.value.startsWith("*222*")) {
  alert("Invalid USSD for 9Mobile");
}
else if (rechargeCode != rechargePin.value) {
  alert("Invalid recharge pin");
  
}
  else
  {
    alert("Error");
  }
}
