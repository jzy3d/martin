$(document).ready(function () {
    var txtToggleInternships = 'Internships in R&D labs';
    var txtToggleHobbies = 'Hobbies & personal software projects';
    var txtClickToExpand = '(click to expand)';
    var txtClickToClose = '(click to minimize)';

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

var txtExpand = '(click to expand)';
var txtClose = '(click to minimize)';
var imgExpand = '<img src="images/chevron-expand.png"/>';
var imgClose = '<img src="images/chevron-close.png"/>';

