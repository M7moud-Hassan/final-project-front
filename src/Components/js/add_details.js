



var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

import  './choices';


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$( document ).ready(function() {
    var base_color = "rgb(230,230,230)";
    var active_color = "rgb(237, 40, 70)";

    var logIn = document.getElementById('logIn');
    var education = document.getElementById('education');
    
    var openExper=document.getElementById("openExper");
    openExper.addEventListener("click", function(event){

      event.preventDefault();
  logIn.style.display='block';
    }); 

document.getElementById("openEducat").addEventListener("click", function(event){
  event.preventDefault();
  education.style.display='block';
});

    window.onclick = function(event) {
      if (event.target == logIn|| event.target == education) {
        logIn.style.display = "none";
        education.style.display = "none";
      }
    }
    
    var cxcontent=document.getElementById('cxcontent');
    var edcontent=document.getElementById('edcontent');
    var is_work=false;
    var not_have_experinces=false;
   document.getElementById('checkbox_iswork').addEventListener('change',function(){
    is_work=this.checked;
   });
    function onchangeCheckedNone(val){
      not_have_experinces=val;
      }
      var addExpirence=document.getElementById("addExpirence");
      addExpirence.addEventListener("click", function(){
        logIn.style.display = "none";
      
        var title=document.getElementById('title').value;
        var company=document.getElementById("company").value;
        var location=document.getElementById("location").value;
       
       
        var start_date=document.getElementById('start_date').value;
        var end_date=document.getElementById('end_date').value;
        var description=document.getElementById('description').value;
        cxcontent.innerHTML+='<div class="col-3 ml-4 experience_x pt-4"><p id="pExperinces">'+title+'-'+company+'-'+location+'-'+is_work+'-'+start_date+'-'+end_date+'-'+description+'</p></div>';
  
      });
    document.getElementById('addEducation').addEventListener('click',function(){
      education.style.display = "none";
      
      var school=document.getElementById('school').value;
      var degree=document.getElementById("degree").value;
      var study=document.getElementById("study").value;
     
     
      var from_year=document.getElementById('from_year').value;
      var to_year=document.getElementById('to_year').value;
      var description2=document.getElementById('description2').value;
      edcontent.innerHTML+='<div class="col-3 ml-4 experience_x pt-4"><p id="peducation">'+school+'-'+degree+'-'+study+'-'+from_year+'-'+to_year+'-'+description2+'</p></div>';

    });


    var child = 1;
    var length = $("section").length - 1;
    $("#prev").addClass("disabled");
    $("#submit").addClass("disabled");

    $("section").not("section:nth-of-type(1)").hide();
    $("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');

    var svgWidth = length * 200 + 24;
    $("#svg_wrap").html(
      '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
        svgWidth +
        ' 24" xml:space="preserve"></svg>'
    );

    function makeSVG(tag, attrs) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (var k in attrs) el.setAttribute(k, attrs[k]);
      return el;
    }

    for (var i = 0; i < length; i++) {
      var positionX = 12 + i * 200;
      var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
      document.getElementById("svg_form_time").appendChild(rect);
      // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
      var circle = makeSVG("circle", {
        cx: positionX,
        cy: 12,
        r: 12,
        width: positionX,
        height: 6
      });
      document.getElementById("svg_form_time").appendChild(circle);
    }

    var circle = makeSVG("circle", {
      cx: positionX + 200,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);

    $('#svg_form_time rect').css('fill',base_color);
    $('#svg_form_time circle').css('fill',base_color);
    $("circle:nth-of-type(1)").css("fill", active_color);


    $(".button").click(function () {
      $("#svg_form_time rect").css("fill", active_color);
      $("#svg_form_time circle").css("fill", active_color);
      var id = $(this).attr("id");
      if (id == "next") {
        if(child==1){
          if($('#joptitle').val()!==''){
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }
    }else if (child==2){
      
      if($("#skipExpirences").is(":checked")){
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }else if($("#pExperinces").length ){
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }
      
    }else if(child==3){
      
      if($("#skipeducations").is(":checked")){
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }else if($("#peducation").length ){
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }
    }else if(child==4)
    {
      if($('.choices__button').length>=5)
      {
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }
    }
    else if(child==6)
    {
      if($('.choices__button').length>=10)
      {
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }
    }else if(child==5){
      if($('#overview').val()!==''){
        $("#prev").removeClass("disabled");
        if (child >= length) {
          $(this).addClass("disabled");
          $('#submit').removeClass("disabled");
        }
        if (child <= length) {
          child++;
        }
      }
    }
      } else if (id == "prev") {
        $("#next").removeClass("disabled");
        $('#submit').addClass("disabled");
        if (child <= 2) {
          $(this).addClass("disabled");
        }
        if (child > 1) {
          child--;
        }
      }
      var circle_child = child + 1;
      $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
        "fill",
        base_color
      );
      $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
        "fill",
        base_color
      );
      var currentSection = $("section:nth-of-type(" + child + ")");
      currentSection.fadeIn();
      currentSection.css('transform','translateX(0)');
     currentSection.prevAll('section').css('transform','translateX(-100px)');
      currentSection.nextAll('section').css('transform','translateX(100px)');
      $('section').not(currentSection).hide();
    });
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
      removeItemButton: true,
    }); 
    });
