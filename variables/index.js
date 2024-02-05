//variable = A container that stores a value and behaves as if it were the value it contains.
let age = 19;
let firstname = "chendi";
let gpa = 2.1;
let student = true;

document.getElementById("p1").textContent = `hello ${firstname}`;
document.getElementById("p2").textContent = `you are ${age} years old`;
document.getElementById("p3").textContent = `are you enrolled ${student}`;
document.getElementById("p4").textContent = `but then i dicovered you have gpa of ${gpa} and that is bad`;