import { NgModule,Component }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponent} from './second';
import { AppComponent }     from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';

const appRoutes: Routes = ([
    {path: 'a', component: AppComponent},
    {path: 'b', component: SecondComponent}
])

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent ,SecondComponent,Ng2PaginationModule],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


