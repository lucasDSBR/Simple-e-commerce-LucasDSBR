import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {
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
		localStorage.removeItem('itens')
	}
}
