function sendMail(){
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        number:document.getElementById("number").value ,
        subject:document.getElementById("subject").value ,
        message:document.getElementById("message").value ,

    }
    
    const serviceID = "service_sdv4qgi";
const templateID = "template_7u3i2tv";
email.js
.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("number").value ="";
        document.getElementById("subject").value ="";
        document.ge(res);
        alert ("Your Message Sent Successfully");
    }
)

.catch((err) => console.log(err));
}










