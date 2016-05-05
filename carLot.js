var CarLot = (function () {
	var inventory = [];

	return {

		loadInventory: function (callback) {
			var inventoryLoader = new XMLHttpRequest();
			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();
			inventoryLoader.addEventListener("load", function () {
				var jsonData = JSON.parse(this.responseText);
				for(i=0; i<jsonData.cars.length; i++) {
					inventory.push(jsonData.cars[i]);
				}
			})
		},
		getInventory: function () {
			return inventory
		}
	};

})();
