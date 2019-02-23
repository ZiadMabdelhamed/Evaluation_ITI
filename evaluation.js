
// open your web browser Console (ctrl+shift+i)
// copy & paste this code
// choose evaluation rating from 1 to 5 
// defult stars number is 5 
// press Enter to Run script
// click Finish Button to Submit your evaluation

var stars = 5;
$('*[id*=ContentPlaceHolder1_UcCourseEval1_]:hidden').each(function() {
	if( !$(this).val() ) {
		$(this).val(stars);
	}
});