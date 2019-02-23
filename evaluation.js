
// open your web browser Console (ctrl+shift+i)
// copy & paste this code
// choose evaluation rating from 1 to 5 
// default stars number is 5 
// write your comment for all field
// default comment is empty
// press Enter to Run script
// click Finish Button to Submit your evaluation


var stars = 5;
var default_comment = "";
$('*[id*=ContentPlaceHolder1_UcCourseEval1_]:hidden').each(function() {
	if( !$(this).val() ) {
		$(this).val(stars);
		$(this).parent().closest('div').siblings('textarea').val(default_comment).text(default_comment).html(default_comment);
	}
	

});