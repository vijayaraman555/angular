"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var service_1 = require('./service');
var SecondComponent = (function () {
    function SecondComponent(_service) {
        this._service = _service;
        this.contact = [
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
        ];
    }
    SecondComponent.prototype.logout = function () {
        this._service.logout();
    };
    SecondComponent = __decorate([
        core_1.Component({
            selector: 'second',
            providers: [service_1.AuthenticationService],
            template: "\n        \n        <p>Success Data!</p>\n        <div class=\"container\" style=\"height: 50px;\n    background: #22a7f0;\n    padding-top: 8px;\">\n    <div  style=\"float:right;\"><button (click)=\"logout()\" class=\"btn btn-default\" href=\"#\">logout</button></div>\n        <label for=\"ex2\">Search</label>\n        <input class=\"\" id=\"ex2\" type=\"text\" [(ngModel)]=\"test\">\n        </div>\n\n        <div class=\"container\" style=\"background:#eee\">     \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n        <th>Email</th>\n       \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let c of contact | paginate: { itemsPerPage: 3, currentPage: p }\">\n        <td>{{c.id}}</td>\n        <td>{{c.name}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>\n        <td>{{c.email}}</td>        \n       \n      </tr>\n     \n    </tbody>\n  </table>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n\n    ",
        }), 
        __metadata('design:paramtypes', [service_1.AuthenticationService])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.js.map