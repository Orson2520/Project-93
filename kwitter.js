function adduser()
{
    user_name  = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    email_name  = document.getElementById("email_name").value;
    localStorage.setItem("email_name", email_name);
}

 function check()
 {
     email = document.getElementById("email_name").value;
     console.log("email");
     document.getElementById("email").innerHTML = "email";
 }