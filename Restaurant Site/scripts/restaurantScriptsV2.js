
function validateForm() {
	var x = document.forms["contactForm"]["fname"].value;
	var a = document.forms["contactForm"]["femail"].value;
	var b = document.forms["contactForm"]["fphone"].value;
	var c = document.forms["contactForm"]["finput"].value;
	
	if (x == "") {
		alert("Name must be filled out");
		return false;
	}
	if (a == "") {
		alert("Email must be filled out");
		return false;
	}
	if (b == "") {
		alert("Phone must be filled out");
		return false;
	}
	if (c == "") {
		alert("Please fill out additional information box");
		return false;
	}
	if ($('[name=yesno]:checked').length == 0){
		alert("Please choose if you have been to restaurant before");
		return false;
	}
	if ($('[name=Days]:checked').length == 0) {
		alert("Please choose best day to contact");
		return false;
	}
	else alert("Your information has been provided successfully")
}