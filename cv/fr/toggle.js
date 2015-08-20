$(document).ready(function () {
    var txtToggleInternships = 'Stages en laboratoire de recherche';
    var txtToggleHobbies = 'Hobbies & projets personnels';
    var txtClickToExpand = '(cliquer pour plus d information)';
    var txtClickToClose = '(cliquer pour refermer)';

    createToggle('toggleinternshipsbutton','toggleIntershipsPanel',txtToggleInternships);
    createToggle('togglehobbiesbutton','toggleHobbiesPanel',txtToggleHobbies);
});

function createToggle(buttonName, panelClassName, buttonLabel){
    var htmlExpand = imgExpand + buttonLabel+' ' + txtExpand;
    var htmlClose = imgClose + buttonLabel + ' ' + txtClose;

    // Button default label
    $(buttonName).html(htmlExpand);

    // Button behaviour
	$(buttonName).click(function () {
		var text = $('div.' + panelClassName);
		if (text.is(':hidden')) {
			text.slideDown('200');
			$(buttonName).html(htmlClose);		
		} else {
			text.slideUp('200');
			$(buttonName).html(htmlExpand);		
		}
	});
}

var txtExpand = '(cliquer pour plus d information)';
var txtClose = '(cliquer pour refermer)';
var imgExpand = '<img src="images/chevron-expand.png"/>';
var imgClose = '<img src="images/chevron-close.png"/>';

