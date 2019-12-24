
	$(function(){
		

		$("#shang").click(function(){
			$("#bigbox").animate({
				scrollTop:0
			},1000);
		});
  	
		$("#bigbox").scroll(function(){

			if($("#bigbox").scrollTop() >=200){
	
			} else{
				$("#shang").stop(true,true).fadeOut(1000); 
			}
		}); 
		

	});