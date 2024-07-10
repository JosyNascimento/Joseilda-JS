/* nav"responsive" class para a nav */
function myFunction() {
    var x = document.getElementById("menu-icon");
    if (x.className === "navbar") {
      x.className += "responsive";
    } else {
      x.className = "navbar";
    }
  } 


  //footer responssivo
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    document.body.appendChild(footer);
});