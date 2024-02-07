const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");


mysubmit.onclick = function(){
    age = mytext.value;
    if(age <= 0){
        result.textContent = `that age is inavalid`;
    }
    else if(age <= 9){
        result.textContent = `you are a minor`;
    }
    else if(age <= 19){
        result.textContent = `you are a teen`;
    }
    else if(age <= 65){
        result.textContent = `you are a an adult and can use this site`;
    }
    else if(age <= 100){
        result.textContent = `you are too old for this site`;
    }
}
