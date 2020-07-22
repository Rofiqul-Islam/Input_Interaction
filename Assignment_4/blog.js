$("#submit").click( function() {
	if($("#Name").val().length==0){
		alert("Name is missing");
	}
	else if($("#Email").val().length==0){
		alert("Email is missing");
	}
	else if($("#Message").val().length==0){
		alert("Comment is missing");
	}else{
		$("#dialog").show();
	}
});

