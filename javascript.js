
function calculateInsurance() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var horse_power = document.getElementById("horsepower").value;

	var page = "on the first page";
	var link = page.link("index.html");

	var insurance = horse_power * 100 / age + 150;
	var price = Math.floor(insurance);

	document.getElementById("price").innerHTML = ("Dear " + name + ", the insurance for your car would cost you approximately " 
		+ price + "€ yearly. For further informations please contact one of our team members " + link + ".");
} 



//I could do it like this as well. But the first one is better I think.

/*function calculateInsurance() {
	var name = "John Doe";
	var age = 20;
	var country = "Austria";
	var horse_power = 150;

	var text = "on the first page";
	var link = text.link("index.html");
	
	insurance = horse_power * 100 / age + 150;

	document.getElementById("price").innerHTML = (name + ", " + age + ", from " + country + ". The insurance for your car would cost you approximately " 
	+ insurance + "€ yearly. For further informations please contact one of our team members " + link + ".");
}*/