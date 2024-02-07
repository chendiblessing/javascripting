const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paybtn = document.getElementById("paybtn");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");
submit.onclick =function(){
    if(mycheckbox.checked){
        subresult.textContent =`you are subcribed`;
    }
    else{
        subresult.textContent =`you are subcribed`;
    }

    if(visabtn.checked){
        payresult.textContent = `you are paying with visa`;
    }
    else if(mastercardbtn.checked){
        payresult.textContent = `you are paying with mastercard`;
    }
    else if(paybtn.checked){
        payresult.textContent = `you are paying with paypal`;
    }
    else{
        payresult.textContent = `you must select a payment type`;
    }
}