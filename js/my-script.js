

/* style switcher  */
const links=document.querySelectorAll(".alternate-style"),
      totlelinks=links.length;

function setActivestyle(color){
    for (let i = 0; i<totlelinks;i++) {
        if (color===links[i].getAttribute("title")) {
        links[i].removeAttribute("disabled");
        }
        else{
         links[i].setAttribute("disabled","true"); 
        }
        
    }
}


/* body skin */
const body_skin=document.querySelectorAll(".body-skin"),
      body_skin_length=body_skin.length;
      for (let i = 0; i<body_skin_length;i++){

        body_skin[i].addEventListener("change",function(){
             if(this.value==="light"){
                 document.body.className="light_style";
             }
             else{
                document.body.className="";
             }
        })
      }


/* typing anaimation script */
 var typed = new Typed(".typing",{
    strings:["","An Engineering Student 💻 👨‍🎓","A Future Blockchain Developer 🔒","A Security Researcher 🔎", "A Open Source Fan ❤","Backend Developer ☢"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true


});
 
/* Contact */
function validation(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var subject= document.getElementById("subject").value;
    var message= document.getElementById("message").value;
    var error_message= document.getElementById("error-message");
    var send_message= document.getElementById("send_message");
    var text;
    error_message.style.display= "block";

    if(name.length<4){
        
        text="Please Enter Valid Name !";
        error_message.innerHTML=text;
        return false;
    }
    
    if(  email.indexOf("@") == -1 || email.length<4){
        text="Please Enter Valid email !";
        error_message.innerHTML=text;
        return false;
    }

    if(subject.length<10){
        text="Please Enter Correct Subject ! ";
        error_message.innerHTML=text;
        return false;
    }
    

    if(message.length<14){
        text="Please Enter More than 14 Characters ";
        error_message.innerHTML=text;
        return false;
    }
error_message.style.display= "none";
alert ("form Submitted Successfully !");
send_message.style.display= "block";

    return true;
}




/* date */
var date= new Date();//object
var Time= document.getElementById("year");
Time.innerHTML=date.getFullYear(); 
