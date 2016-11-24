import {Component} from '@angular/core';
import {AuthenticationService} from './service';

@Component({
	selector: 'second',
     providers: [AuthenticationService],
    template: `
        
        <p>Success Data!</p>
        <div class="container" style="height: 50px;
    background: #22a7f0;
    padding-top: 8px;">
    <div  style="float:right;"><button (click)="logout()" class="btn btn-default" href="#">logout</button></div>
        <label for="ex2">Search</label>
        <input class="" id="ex2" type="text" [(ngModel)]="test">
        </div>

        <div class="container" style="background:#eee">     
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
       
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let c of contact | paginate: { itemsPerPage: 3, currentPage: p }">
        <td>{{c.id}}</td>
        <td>{{c.name}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>
        <td>{{c.email}}</td>        
       
      </tr>
     
    </tbody>
  </table>
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
  </div>

    `,
})

export class SecondComponent {
     constructor(
        private _service:AuthenticationService){}

   
     logout() {
        this._service.logout();
     }
        public contact = 
[
  { id: 1, name: "Donuts", email: "vj@gmail.com" },
  { id: 2, name: "Pizza", email: "vj@gmail.com" },
  { id: 3, name: "Sushi", email: "vj@gmail.com" },
  { id: 4, name: "Donuts", email: "vj@gmail.com" },
  { id: 5, name: "Pizza", email: "vj@gmail.com" },
  { id: 6, name: "Sushi", email: "vj@gmail.com" },
  { id: 7, name: "Donuts", email: "vj@gmail.com" },
  { id: 8, name: "Pizza", email: "vj@gmail.com" },
  { id: 9, name: "Sushi", email: "vj@gmail.com" },
  { id: 10, name: "Dosai", email: "vj@gmail.com" }
]

 


}