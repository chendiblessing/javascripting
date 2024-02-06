/* how to accept user input
    1. easy way = window prompt
    2. professional way = HTML textbox
*/
let username;
let email;
let school;
//username = window.prompt("what's your name?");
//console.log(username);
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    email = document.getElementById("myemail").value;
    school = document.getElementById("myschool").value;
    console.log(username);
    console.log(email);
    console.log(school);
}