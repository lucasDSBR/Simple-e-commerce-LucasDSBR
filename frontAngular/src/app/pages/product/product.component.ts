import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from 'src/app/components/snack/snack.component';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
	constructor(private snackBar: MatSnackBar){}
	products: any[] = [];
	getDataItem(){
		// Divide a URL em partes usando '/' como separador
		const parts = window.location.href.split('/');
		const url = "http://localhost:3000/product/"+parts[parts.length - 1];
		const options = {
			method: 'GET',
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
			this.products[0] = data;
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}

	ngOnInit() {
		this.getDataItem();
	}


	addCart(){
		this.openSnackBar('Item added to shopping cart..');
		var data: any
		data = localStorage.getItem('itens') == null ? "" : localStorage.getItem('itens');
		data = data.split("#")
		if(data.length == 5){
			this.openSnackBar('You have already reached the item limit (5).');
		}else{
			var local = null;
			if(localStorage.getItem('itens') != null && localStorage.getItem('itens') != ""){
				local = localStorage.getItem('itens');
				local = local + "#" + JSON.stringify(this.products[0]);
			}else{
				local = JSON.stringify(this.products[0])
			}
			localStorage.setItem('itens', local);
		}
	}


	openSnackBar(message: string) {
		let snackBarRef = this.snackBar.open(message, "OK", {duration: 3000});
	}
}
