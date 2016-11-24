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
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.onclick = function () {
        this._router.navigate(['b']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 style=\"text-align:center;\">Modastyle</h1>\n  <div class=\"container\">\n  <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <div class=\"well bs-component\" style=\"margin-left: 300px;\n    margin-top: 30px;\n    width: 100%;\">\n\t<form class=\"form-horizontal\" action=\"/product/search\" method=\"post\" commandname=\"searchparams\">\n\t           <fieldset>\n    <h3 style=\"margin-bottom: 22px;\">Search product</h3>\n    <div class=\"form-group\">\n      <label for=\"brand\" class=\"col-lg-2 control-label\">Brand</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" name=\"brand\" id=\"brand\" placeholder=\"Brand\" value=\"\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputColor\" class=\"col-lg-2 control-label\">Color</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"color\" name=\"color\" placeholder=\"Color\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputCategory\" class=\"col-lg-2 control-label\">Category</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"category\" name=\"category\" placeholder=\"Category\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"merchant\" class=\"col-lg-2 control-label\">Merchant / Store</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"merchant\" name=\"merchant\" placeholder=\"Merchant\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button (click)=\"onclick()\" type=\"search\" class=\"btn btn-primary\">\n        \t<span class=\"glyphicon glyphicon-search\"></span> Search\n        </button>\n      </div>\n    </div>\n    </fieldset>\n    </form>\n    </div>\n    </div>\n    </div>\n    </div>\n    <router-outlet></router-outlet>\n     "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map