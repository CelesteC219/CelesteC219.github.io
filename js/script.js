let ham = document.getElementById("ham");

ham.addEventListener("click", function() {

    let menu = document.getElementById("menu");

    menu.classList.toggle("show-menu");

})

function showsearch() {
  let searchcol = document.getElementById("searchcol");
  searchcol.style.opacity = 1;

}

// Form code
 /* paste this line in verbatim */
 window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
 /* customize formbutton below*/     
 formbutton("create", {
   action: "https://formspree.io/f/xpzbawdk",
   title: "How can we help?",
   fields: [
     { 
       type: "email", 
       label: "Email:", 
       name: "email",
       required: true,
       placeholder: "your@email.com"
     },
     {
       type: "textarea",
       label: "Message:",
       name: "message",
       placeholder: "What's on your mind?",
     },
     { type: "submit" }      
   ],
   styles: {
     title: {
       backgroundColor: "gray"
     },
     button: {
       backgroundColor: "gray"
     }
   }
 });