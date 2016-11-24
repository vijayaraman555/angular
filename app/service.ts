import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    
    this._router.navigate(['a']);
  }
}