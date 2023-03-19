
// Get the modal
var modal3 = document.getElementById('id03');
// Get the modal
var modal2 = document.getElementById('id02');
var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }else if(event.target == modal2){
      modal2.style.display = "none";
    }else if(event.target == modal3){
      modal3.style.display = "none";
    }
}
