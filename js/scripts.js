// scripts.js

function Phone(brand, price, color, weight, year) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.weight = weight;
	this.year = year;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.showInfo = function() {
	alert("Is good choice!");
}
var iPhone6S = new Phone('Apple', 3000, 'black', 120, 2016),
	SamsungGalaxyS6 = new Phone('Samsung', 3500, 'silver', 125, 2017),
	OnePlusOne = new Phone('HTC', 2500, 'white', 134, 2017),
	SonyXperiaXA = new Phone('Sony', 2800, 'silver', 132, 2017),
	HuaweiP10 = new Phone('Huawei', 2200, 'blue', 118, 2017);