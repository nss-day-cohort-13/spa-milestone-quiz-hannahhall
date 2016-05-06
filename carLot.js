var CarLot = (function (load) {
	var inventory = [];

	load.loadInventory= function (callback) {
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();
		inventoryLoader.addEventListener("load", function () {
			var jsonData = JSON.parse(this.responseText);
			for(i=0; i<jsonData.cars.length; i++) {
				inventory.push(jsonData.cars[i]);
			}
			callback (inventory);
		})
	},

	load.getInventory= function () {
			return inventory;
		}

	return load;

})(CarLot || {});
