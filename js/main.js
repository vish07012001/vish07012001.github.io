// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

document.getElementById('contact').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the form from submitting immediately

    // Display a success message
    var form_message = document.getElementById('form_message');
    form_message.style.display = 'block';
    form_message.innerText = 'Thank you for reaching out! Please try to mail me on my account listed above as the details submitted in form are not monitored';

     // Delay submission to display the message
     setTimeout(function() {
        event.target.submit(); // Submit the form programmatically
    }, 10000); // 10-second delay before submitting
});
 