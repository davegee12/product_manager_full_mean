import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editId;
  edit;
  errors;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.editId = params['id'];
    });

    this.getProduct(this.editId);
  }
  getProduct(id){
    let observable = this._httpService.getProductById(id);
    observable.subscribe(data => {
      console.log(data['result']);
      this.edit = data['result'];
    })
  }
  OnSubmit(){
    this.errors = [];
    let observable = this._httpService.updateProduct(this.edit);
    observable.subscribe(data => {
      if(data['message'] === 'Success!'){
        console.log(data['message']);
        this._router.navigate(['/products']);
      }
      else{
        console.log("this is the data" + data);
        console.log(data['error']['errors']['name']['message']);
        this.errors.push(data['error']['errors']['name']['message']);
        console.log(this.errors);
      }
    })
  }
}
