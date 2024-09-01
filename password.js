let inp=document.querySelector("input");
let btn=document.querySelector("button");
let btn1=document.querySelector(".check");
let l1=document.querySelector(".l1");
let l2=document.querySelector(".l2");
btn.addEventListener("click",function(event){
    if(inp.type=="password"){
        inp.type="text";
    }
    else{
        inp.type="password";
    }
})
function change_color(){
    l2.style.color="black";

}
function change_color1(){
    l1.style.color="black";

}

function checkPassword() {
    var password = document.getElementById("password").value;
    var isLengthValid = password.length >= 12;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!isLengthValid){l1.style.color="red";setTimeout(change_color1,1000)};
    if (!hasUpperCase){l2.style.color="red";setTimeout(change_color,1000)};
    if (!hasLowerCase){l2.style.color="red";setTimeout(change_color,1000)};
    if (!hasNumber){l2.style.color="red";setTimeout(change_color,1000)};
    if (!hasSpecialChar){l2.style.color="red";setTimeout(change_color,1000)};
}
btn1.addEventListener("click",function(){
    checkPassword();
})