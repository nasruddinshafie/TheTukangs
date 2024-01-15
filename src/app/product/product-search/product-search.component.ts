import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  @Output() buttonClick:EventEmitter<string> =  new EventEmitter<string>();

  searchProduct(inputTxt:string):void {
      this.buttonClick.emit(inputTxt);
  }
}
