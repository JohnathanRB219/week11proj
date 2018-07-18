$("#menu").click(function(){
	$("#menu").toggleClass("menu-open");
	$("#menu2").toggleClass("menu-collapsed");
	$("#menu2 ul li").toggleClass("hidden animated fadeInLeft");
});