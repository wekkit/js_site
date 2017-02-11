$(document).ready(function(){
	$("#showNews").click(function(){
		if ($("#showNews").text() === "Show more...") {
			$(".moreNews").css("display","list-item");
			$("#showNews").text("Show less...");	
		} else if ($("#showNews").text() === "Show less...") {
			$(".moreNews").css("display","none");
			$("#showNews").text("Show more...");			
		}
	})
}); 
