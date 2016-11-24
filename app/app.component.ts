import { Component } from '@angular/core';
import {AuthenticationService} from './service';
import {Router} from '@angular/router';
@Component({
   selector: 'my-app',
  template: `<h1 style="text-align:center;">Modastyle</h1>
  <div class="container">
  <div class="row">
          <div class="col-lg-6">
            <div class="well bs-component" style="margin-left: 300px;
    margin-top: 30px;
    width: 100%;">
	<form class="form-horizontal" action="/product/search" method="post" commandname="searchparams">
	           <fieldset>
    <h3 style="margin-bottom: 22px;">Search product</h3>
    <div class="form-group">
      <label for="brand" class="col-lg-2 control-label">Brand</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" name="brand" id="brand" placeholder="Brand" value="">
      </div>
    </div>
    <div class="form-group">
      <label for="inputColor" class="col-lg-2 control-label">Color</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="color" name="color" placeholder="Color">
      </div>
    </div>
    <div class="form-group">
      <label for="inputCategory" class="col-lg-2 control-label">Category</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="category" name="category" placeholder="Category">
      </div>
    </div>
    <div class="form-group">
      <label for="merchant" class="col-lg-2 control-label">Merchant / Store</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="merchant" name="merchant" placeholder="Merchant">
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button (click)="onclick()" type="search" class="btn btn-primary">
        	<span class="glyphicon glyphicon-search"></span> Search
        </button>
      </div>
    </div>
    </fieldset>
    </form>
    </div>
    </div>
    </div>
    </div>
    <router-outlet></router-outlet>
     `
})

export class AppComponent { 
  
  
constructor(private _router:Router) {}
  
  onclick(){
    this._router.navigate(['b']);
  }
  
}

