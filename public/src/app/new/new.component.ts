import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  newProduct;
  errors = [];
  ngOnInit() {
    this.newProduct = {
      title: '',
      price: '',
      url: ''
    }
  }
  OnSubmit() {
    this.errors = [];
    let observable = this._httpService.addProduct(this.newProduct)
    observable.subscribe(data => {
      if(data['message'] === "Success!"){
        this._router.navigate(['/products']);
      }
      else{
        console.log(data);
        console.log(data['error']['price']['message']);
        console.log(data['error']['title']['message']);
        console.log(data['error']['url']['message']);
        this.errors.push(data['error']['price']['message']);
        this.errors.push(data['error']['title']['message']);
        this.errors.push(data['error']['url']['message']);
        console.log(this.errors);
      }
    })
  }
}
