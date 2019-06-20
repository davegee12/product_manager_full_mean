import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  products = [];
  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    let observable = this._httpService.getAllProducts();
    observable.subscribe(data => {
      console.log("Got our products!");
      console.log(data['result']);
      this.products = data['result'];
    })
  }
  deleteProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      if (data['message'] == "Success!"){
        alert(`You deleted ${this.products['result'].name}!`);
      }
    })
    this.getAllProducts();
  }
}
