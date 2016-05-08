function populatePage (inventory) {
	var pageInput = document.getElementById("inventory");
	var data= "";

	for(i=0; i<inventory.length; i++) {
		data+= `<section class='col-md-4 ${i} ${inventory[i].color}'>
						<h2>${inventory[i].make} ${inventory[i].model}</h2>
						<p>	Year: ${inventory[i].year}
								Price: ${inventory[i].price}
								Color: ${inventory[i].color}
						</p>
						<p>Purchased: ${inventory[i].purchased}</p>
						<p id='${i}' class='description'>${inventory[i].description}</p></section>`;
					}
	pageInput.innerHTML= data;

	// Adds colored border around car elements
	var section = document.getElementsByClassName("col-md-4");
	for(j=0; j<section.length; j++) {
		section[j].style.border = `2px solid ${inventory[j].color}`;
	}

	CarLot.activateEvents();
}
CarLot.loadInventory(populatePage);
