function populatePage (inventory) {
	var pageInput = document.getElementById("inventory");
	var data= "";
	data= `<div class= col-md-1></div>`
	for(i=0; i<inventory.length; i++) {
		data+=`	<section class='col-md-3 ${inventory[i].color}'>
						<h2>${inventory[i].make} ${inventory[i].model}</h2>
						<p>	Year: ${inventory[i].year}
								Price: ${inventory[i].price}
								Color: ${inventory[i].color}
						</p>
						<p>Purchased: ${inventory[i].purchased}</p>
						<p id='${i}' class='description'>${inventory[i].description}</p></section>`
	}
	data += `<div class= col-md-1></div>`
	pageInput.innerHTML= data;
	CarLot.activateEvents();
 }
CarLot.loadInventory(populatePage);