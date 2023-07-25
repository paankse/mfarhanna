var myVar;

function myFunction() {
   myVar = setTimeout(showPage, 1500);
}

function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("myDiv").style.display = "block";
}

window.addEventListener("scroll", reveal);

function reveal() {
   var reveals = document.querySelectorAll(".reveal");

   for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 80;
      console.log(revealpoint);

      if (revealtop < windowheight - revealpoint) {
         reveals[i].classList.add("reveal-active");
      } else {
         reveals[i].classList.remove("reveal-active");
      }
   }
}

if (window.history.replaceState) {
   window.history.replaceState(null, null, window.location.href);
}
