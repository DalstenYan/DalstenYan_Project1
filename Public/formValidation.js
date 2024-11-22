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

//document.getElementById("toastbtn").onclick

function checkname()
{
    var nametoast = document.getElementById("nameToast");
    let screenName = username.value.trim();
    if(screenName.length > 1)
        {
            nameValid = true;
            nametoast.classList.remove("musttoast");
        }
        else
        {
            nametoast.classList.add("musttoast");
        }

}

function checkemail()
{
    var emailtoast = document.getElementById("emailToast");
    let trueEmail = email.value.trim();
    if(trueEmail.includes("@gmail.com") || trueEmail.includes("@yahoo.com") || trueEmail.includes("@hotmail.com") || trueEmail.includes("@aol.com"))
        {
            emailValid = true;
            emailtoast.classList.remove("musttoast");
        }
        else
        {
            emailtoast.classList.add("musttoast");
        }
    
    
}

function checkmessage()
{
    var messagetoast = document.getElementById("messageToast");
    let truemessage = message.value.trim();
    if(truemessage.length > 1){
        messageValid = true;
        messagetoast.classList.remove("musttoast");     
    }
    else
    {
        messagetoast.classList.add("musttoast"); 
    }
}


function checktimezone()
{
    var timezonetoast = document.getElementById("timezoneToast");
    let truetimezone = timezone.value;
    if(truetimezone != "")
        {
            timezoneValid = true;
            timezonetoast.classList.remove("musttoast");
        }
        else
        {
            timezone.classList.add("musttoast");
        }
}

function checkForm(event)
{
    console.log("check");

    checktimezone();
    if(!nameValid || !emailValid || !messageValid || !timezoneValid){
        event.preventDefault();
        sendToast();
    }
    else
    {
        console.log("success");
    }
}

function sendToast()
{
    var toastElList = [].slice.call(document.querySelectorAll('.musttoast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) 
}
