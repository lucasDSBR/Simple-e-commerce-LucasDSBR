import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
	@Input() cat: any;
	@Input() title: any;
	@Input() val: any;
	@Input() url_image: any;
}
