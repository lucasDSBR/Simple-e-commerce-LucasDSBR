import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	products: any[] = [];
	categori: any[] = [];
	items: any[] = [];
	selectedCar: any;
	getDataItem(): void{
		const url = 'http://localhost:3000/products';
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		};
		fetch(url, options)
		.then(response => {
			if (!response.ok) {
			throw new Error('Erro na solicitação. Status: ' + response.status);
			}
			return response.json();
		})
		.then(data => {
			this.products = data;
			this.updateCateg()
		})
		.catch(error => {
			console.error('Erro na solicitação:', error);
		});
	}
	updateCateg(){
		this.products.forEach(element => {
			if(!this.categori.includes(element.category_desc)){
				this.categori.push(element.category_desc)
			}
		});
	}

	ngOnInit() {
		this.getDataItem();
	}

	filter(){
		this.products.forEach(element => {
			if(element.category_desc == this.selectedCar){
				this.items.push(element)
			}
		});
		if(this.selectedCar == "All"){
			this.getDataItem();
		}
		this.products = this.items
		this.items = []
	}

}
