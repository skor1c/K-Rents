jQuery(document).ready(function(){
	
	$( ".cross" ).hide();
	$( ".hamburgermenu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".hamburgermenu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide("slow");
			$( ".cross" ).show("slow");
		});
	});

	$( ".cross" ).click(function() {
		$( ".hamburgermenu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide("slow");
			$( ".hamburger" ).show("slow");
		});
	});

	$( ".hamburgermenu" ).click(function() {
		$( ".hamburgermenu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide("slow");
			$( ".hamburger" ).show("slow");
		});
	});

});