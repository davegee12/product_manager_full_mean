import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getAllProducts() {
    return this._http.get('/allProducts');
  }
  getProductById(id) {
    return this._http.get(`/product/${id}`);
  }
  addProduct(newProduct) {
    return this._http.post('/create', newProduct);
  }
  updateProduct(editProduct) {
    return this._http.put(`/update/product/${editProduct._id}`, editProduct);
  }
  deleteProduct(id) {
    return this._http.delete(`/destroy/product/${id}`);
  }
}