import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProduct } from 'src/app/_models/product-create-model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})

export class ProductAddComponent {


  constructor(private productService: ProductService, private router: Router){}

 productForm = new FormGroup({
   name : new FormControl(''),
   description: new FormControl(''),
   price:new FormControl(),
 });


 onSubmit(form: FormGroup):void {

  const myProduct: CreateProduct = {
    Name: form.value.name,
    Description: form.value.description,
    MaximumPrice: form.value.price,
    MinimumPrice: form.value.price
  }
  
  this.productService.addProduct(myProduct).subscribe(
    (data) => {
      console.log(data);

      this.router.navigateByUrl('product-list');
    },
    (error) => {
      console.error('Error adding data:', error);}
       
  );
 }
}
