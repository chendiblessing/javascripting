// Math = built-in object that provides a 
//        collection of properties and methods
p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
p5 = document.getElementById("p5");
p6 = document.getElementById("p6");
p7 = document.getElementById("p7");
result = document.getElementById("result");

p1.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.ceil(myinput)
    result.textContent = `answer: ${x}`;
}
p2.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.floor(myinput)
    result.textContent = `answer: ${x}`;
}
p3.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.sin(myinput)
    result.textContent = `answer: ${x}`;
}
p4.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.cos(myinput)
    result.textContent = `answer: ${x}`;
}
p5.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.tan(myinput)
    result.textContent = `answer: ${x}`;
}
p6.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.log(myinput)
    result.textContent = `answer: ${x}`;
}
p7.onclick = function(){
    myinput = document.getElementById("input").value;
    x = Math.sqrt(myinput)
    result.textContent = `answer: ${x}`;
}