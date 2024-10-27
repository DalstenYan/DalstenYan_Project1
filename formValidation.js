let nameValid = false;
let emailValid = false;
let messageValid = false;
let timezoneValid = false;

let form = document.querySelector("#contactform");
form.addEventListener("submit", checkForm)

let username = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let timezone = document.querySelector("#timezone");

username.addEventListener("input", checkname);
email.addEventListener("input", checkemail);
message.addEventListener("input", checkmessage);
timezone.addEventListener("input", checktimezone);

function checkname()
{
    let screenName = username.value.trim();
    nameValid = screenName.length > 0;
    
}

function checkemail()
{

}

function checkmessage()
{

}

function checktimezone(){}

function checkForm(event)
{
    if(!nameValid){
        event.preventDefault();
    }
}