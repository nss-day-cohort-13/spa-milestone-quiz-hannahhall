var CarLot = (function (toggle) {
	var currentSelection;
//When the car element is selected the border and background color changes
	toggle.toggleOn = function (event, grey) {
		currentSelection = event.target.parentNode;
		if (currentSelection.tagName.toLowerCase() === "section") {
			currentSelection.classList.toggle("grey");
		}
	}
// When the update button is clicked the selected car's styling resets
	toggle.toggleOff = function (grey) {
		currentSelection.classList.toggle("grey");
	}
	return toggle;
})(CarLot || {});
