$("#submit").click( function() {
	if($("#Name").val().length==0){
		$("#Missing_name").show();
		$("#Missing_comment").hide();
		$("#Missing_email").hide();
		$("#dialog").hide();
	}
	else if($("#Email").val().length==0){
		$("#Missing_name").hide();
		$("#Missing_comment").hide();
		$("#Missing_email").show();
		$("#dialog").hide();
	}
	else if($("#Message").val().length==0){
		$("#Missing_name").hide();
		$("#Missing_comment").show();
		$("#Missing_email").hide();
		$("#dialog").hide();
	}else{
		$("#Missing_name").hide();
		$("#Missing_comment").hide();
		$("#Missing_email").hide();
		$("#dialog").show();
	}
});

