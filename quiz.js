var pageInput = document.getElementById("inventory");
var textInput = document.getElementById("input");
function populatePage (inventory) {
	var data= "";
	for(i=0; i<inventory.length; i++) {
		console.log(inventory[i]);
		data+=`<section class='col-md-4 ${inventory[i].color}'>
						<h2>${inventory[i].make} ${inventory[i].model}</h2>
						<p>	Year: ${inventory[i].year}
								Price: ${inventory[i].price}
								Color: ${inventory[i].color}
						</p>
						<p>Purchased:${inventory[i].purchased}</p>
						<p class='description'>${inventory[i].description}</p></section>`;
	}
	pageInput.innerHTML= data;
 }

// Load the inventory and send a callback function to be
// invoked after the process is complete
var description;
CarLot.loadInventory(populatePage);
function replace (event) {
		description.innerHTML = textInput.value;
}

document.getElementById("container").addEventListener("click", function(event) {
	console.log("target", event.target);
	console.log("current target", event.currentTarget);

	// handle click event on any listen
	if (event.target.parentNode.tagName.toLowerCase()=== "section") { //could also use id or class name
		var currentSelection= event.target.parentNode;
		currentSelection.classList.toggle("active");
		description= currentSelection.querySelector(".description")
		console.log(currentSelection.classList);
		textInput.focus();
		textInput.value= description.innerHTML;
		textInput.addEventListener("keyup", replace);

	}
})




