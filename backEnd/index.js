var express = require("express");
var app = express();
var products = [
	{
		"id": 1,
		"category": 1,
		"category_desc": "Category1",
		"title": "Teste1",
		"val": "USD 30",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 2,
		"category": 2,
		"category_desc": "Category2",
		"title": "Teste2",
		"val": "USD 30 p/month",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 3,
		"category": 3,
		"category_desc": "Category3",
		"title": "Teste3",
		"val": "USD 50",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 4,
		"category": 4,
		"category_desc": "Category4",
		"title": "Teste4",
		"val": "USD 30 p/month",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 5,
		"category": 5,
		"category_desc": "Category5",
		"title": "Teste5",
		"val": "USD 100 p/month",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 6,
		"category": 6,
		"category_desc": "Category6",
		"title": "Teste6",
		"val": "USD 40 p/month",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 7,
		"category": 7,
		"category_desc": "Category7",
		"title": "Teste7",
		"val": "USD 100",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 8,
		"category": 8,
		"category_desc": "Category8",
		"title": "Teste8",
		"val": "USD 30",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	},
	{
		"id": 9,
		"category": 9,
		"category_desc": "Category9",
		"title": "Teste9",
		"val": "USD 1000",
		"url_image": "https://s3-alpha-sig.figma.com/img/e640/c84d/0f89201e4c72dd2763ed8b2ec33a1880?Expires=1690761600&Signature=MOfIIfLdJ0ShD-KOwPD2B1qLDNhvHJwIIu~o7F22pWXrs-znsk~2enNk4D1AT~aPA~GRa~K2nBbEFhTcDcUPVpLd-6Em3lb8xVkaytObDHiqP219JaXA0CHNDrO82Y2FPthVVmd2wQVVvqDDse74MYgw~upZn~HaEIhv6XPzZP5tcCVnsFzEyNQ3PrfzalbVacushdnRcZRDG~BNNWTXfB3OdS68oZR0Csa8Yf1xg02~O5WyofRlgXC1uIdbjj1WsvXEaPtRHale1K0xXEr9JN-X9tB2cNAPm0dkD4dKkn23fMCzpAStgMK8TNernvwIlWsdrAp8BHjhx1ooRqLI~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	}
]
//Cors
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.get("/product/:id", (req, res, next) => {
	//Sei que essa forma não é adequada.
	for (const objeto of products) {
		if (objeto.id == parseInt(req.params.id)) {
			res.json(objeto)
		}
	}
});
app.get("/products", (req, res, next) => {
	res.json(products);
});
app.post("/pay", (req, res, next) => {
	res.json([{"message": "Purchase completed successfully!"}]);
	console.log("Purchase completed successfully!")
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});