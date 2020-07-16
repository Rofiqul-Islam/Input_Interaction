$(document).ready(function() { // do this when the document is loaded
	$("#tab_1").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_3").hide();// hide the element with ID "otherElement"
	$("#tab_4").hide();
});

$("#tab1btn").click(function() { // when "button_id" is clicked
	$("#tab_1").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_3").hide();	// hide other element
	$("#tab_4").hide();
});

$("#tab2btn").click(function() { // when "button_id" is clicked
	$("#tab_2").show(); // show the element with ID "element"
	$("#tab_1").hide();
	$("#tab_3").hide();	// hide other element
	$("#tab_4").hide();
});
$("#tab3btn").click(function() { // when "button_id" is clicked
	$("#tab_3").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_1").hide();	// hide other element
	$("#tab_4").hide();
});

$("#tab4btn").click(function() { // when "button_id" is clicked
	$("#tab_3").hide(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_1").hide();	// hide other element
	$("#tab_4").show();
});



$('.digit').click (function() {
	var text = $(this).text();
	$("#dial-value").val($("#dial-value").val()+text);
});

$('.clearbtn').click (function() {
	var text = $("#dial-value").val();
	$("#dial-value").val(text.substring(0,text.length -1));
	
	
});

$('.deletebtn').click (function() {
	var text = $("#dial-value").val();
	$("#dial-value").val(" ");
	
	
});
$('.contactclear').click(
    function(){
        $("#username").val('');
		  $("#phone").val('');
		    $("#email").val('');
    });
		var downX=0;
		var downY=0;
		var upX=0;
		var upY=0;
$('.gesture').mousedown(
	function(e){
		$("#gesture_output").val("Mouse Down");
		 downX = e.pageX;
		 downY = e.pageY;
		 console.log(downX +" " + downY);
		
		 
	});
	
$('.gesture').mouseup(
	function(e){
		
		 upX = e.pageX;
		 upY = e.pageY;
		 console.log(upX +" " + upY);
		   if (upY<downY ){$("#gesture_output").val("Swipe Up");}
		 else if (upY>downY ){$("#gesture_output").val("Swipe Down");}
		 else if (upX<downX ){$("#gesture_output").val("Swipe Left");}
		 else if (upX>downX ){$("#gesture_output").val("Swipe Right");}
		 else if ((upX==downX)&&  (upY==downY)) {$("#gesture_output").val("Mouse Up");}
		 
		
		 
	});
	
$('.gesture').mouseleave(function() {
	$("#gesture_output").val(" ");
});



