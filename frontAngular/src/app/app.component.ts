import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	data: any;
	products: number = 0;
	ngOnInit() {
		setInterval(() => {
			if(localStorage.getItem('itens') != null && localStorage.getItem('itens') != ""){
				this.data = localStorage.getItem('itens') == null ? "" : localStorage.getItem('itens');
				this.data = this.data.split("#")
				this.products =  this.data.length
			}else{
				this.products = 0;
			}
		}, 500); // 3000 ms = 3 segundos
	}
	valCart(){

	}
}
function valCart() {


}
