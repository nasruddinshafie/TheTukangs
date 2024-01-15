import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ResultModel } from 'src/app/_models/result-model';

import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService){}

  products: Product[] = [];

  currentPage = 1;
  itemsPerpage = 2;
  ngOnInit(): void {
    this.GetAllProducts();
  }


  onPageChange(event: any) {
    this.currentPage = event;
  }

  GetAllProducts():void{
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.data;
      },
      (error) => {
        console.error('Error fetching data:', error);
        alert("dasdas");
      }
    )
  }

  searchProduct(text:string): void{
    this.products = this.products.filter(product => 
      product.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));


      if(this.products.length == 0){
        this.GetAllProducts();
      }
  }

}
