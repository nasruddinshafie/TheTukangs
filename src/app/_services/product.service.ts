import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../_models/product';
import { Observable } from 'rxjs';
import { ResultModel } from '../_models/result-model';
import { environment } from 'src/environments/environment';
import { CreateProduct } from '../_models/product-create-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://localhost:7058/api';

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<ResultModel>(`${this.baseUrl}/Product/GetProducts`);
  }

  addProduct(model:CreateProduct){
    return this.http.post(`${this.baseUrl}/Product/AddProduct`, model);
  }
}
