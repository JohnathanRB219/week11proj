$("#menu").click(function(){
	// open and closes my button
	$("#menu").toggleClass("menu-open");
// collapses my menu button to open and close
	$("#menu2").toggleClass("menu2open");
	// lis fade in from the left when button is open 
	$("#menu2 ul li").toggleClass("hidden animated fadeInLeft");
});