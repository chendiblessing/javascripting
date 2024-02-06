//counter program
const decreasebtn = document.getElementById("decreasebtn");
const restbtn = document.getElementById("restbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel= document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count+= 1;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count-= 1;
    countlabel.textContent = count;
}
restbtn.onclick =function(){
    count -=count;
    countlabel.textContent =count;
}