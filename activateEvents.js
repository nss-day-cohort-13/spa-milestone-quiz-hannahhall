var CarLot 			= (function (events) {
	var pageInput = document.getElementById("inventory");
	var textInput = document.getElementById("input");
	var updateBtn = document.getElementById("button");
	var container = document.getElementById("container");
	var description;
	var id;

// When car element is selected, the text input auto populates with the description of the selected car
	function textInputFocus (event) {
		var currentSelection = event.target.parentNode;
		if (currentSelection.tagName.toLowerCase()=== "section") {
			description = currentSelection.querySelector(".description");
			id = description.id;
			textInput.focus();
			textInput.value = description.innerHTML;
		}
	}

//As the user types the selected cars description matches what is being typed in the input field
	function replace () {
		description.innerHTML = textInput.value;
	}

// When the update button is clicked the information in the Inventory array is changed to match the updated text
	function updateDescription () {
		CarLot.getInventory()[id].description = textInput.value;
		textInput.value = "";
	}

	events.activateEvents = function () {
			container.addEventListener("click", textInputFocus);
			container.addEventListener("click", CarLot.toggleOn);
			updateBtn.addEventListener("click", updateDescription);
			updateBtn.addEventListener("click", CarLot.toggleOff);
			textInput.addEventListener("keyup", replace);

		}

	return events

})(CarLot || {});

