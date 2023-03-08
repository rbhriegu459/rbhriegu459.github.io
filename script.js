//script.js

function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("subject").value
    }
    emailjs.send("service_qurpbih","template_czn4vcc", params).then(function(res) {
        alert("Success " + res.status);
    })   
}