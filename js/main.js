const sendButton = document.getElementById("sendButton");
let username = document.getElementById("username");
let email = document.getElementById("email");
let message = document.getElementById("message");
function invildform() {
    if (username.value == "") {
        alert("Enter your name");
        username.focus();
    }
    else if (email.value == "") {
        alert("Enter your email");
        email.focus();
    }
    else if (message.value == "") {
        alert("Enter your message");
        message.focus();
    }
}
sendButton.addEventListener("click", invildform);
