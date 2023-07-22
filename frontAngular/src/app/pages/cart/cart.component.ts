import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
	constructor( private router:Router, private snackBar: MatSnackBar) {
	}
	products: any[] = [];
	ngOnInit() {
		this.getDada();
	}
	getDada(){
		var data: any
		if(localStorage.getItem('itens') != null && localStorage.getItem('itens') != ""){
			data = localStorage.getItem('itens') == null ? "" : localStorage.getItem('itens');
			data = data.split("#")
			data.forEach((e: any) => {
				this.products.push(JSON.parse(e))
			});
		}
	}
	pay() {
		// Divide a URL em partes usando '/' como separador
		const url = "http://localhost:3000/pay";
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
		};
		fetch(url, options)
		.then(response => {
			if (!response.ok) {
				throw new Error('Error. Status: ' + response.status);
			}
			return response.json();
		})
		.then(data => {
			this.openSnackBar(data[0].message)
			this.router.navigate(['thanks']);
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}
	openSnackBar(message: string) {
		this.snackBar.open(message, "OK", {duration: 3000});
	}
}
