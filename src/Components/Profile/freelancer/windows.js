
window.onscroll=function(){
    const DoM = document.getElementById("setting")
        DoM.style.display = 'none'
    var box  = document.getElementById('box');
    box.style.height  = '0px';
    box.style.opacity = 0;
}
window.onclick=function(e){
    if(e.target!=document.getElementById("m7moud")){
    const DoM = document.getElementById("setting")
    DoM.style.display = 'none'
    } 
}