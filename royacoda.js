var containerHeight= $('#container').height();
var navbarHeight= $('#navbar').height();
var codeSheetHeight= containerHeight - navbarHeight;

$(".codeSheet").height(codeSheetHeight + "px");

$(".toggle").click(function(){

	$(this).toggleClass("chosen");

	var switchDiv = $(this).html();
	$("#"+ switchDiv+"Sheet").toggle();
	var showingDivs=$(".codeSheet").filter(function(){
		return($(this).css("display") != "none");

	}).length;

	var width=100/showingDivs;
	$(".codeSheet").width(width + "%");
})

$('#runBtn').click(function(){
	$('iframe').contents().find('html').html("<style>"+$('#cssCode').val()+"</style>"+$('#htmlCode').val());
	myresult.contentWindow.eval($('#jsCode').val())
})