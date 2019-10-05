import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



import {TodoModule} from './todo/todo.module';
import {AuthModule} from './auth/auth.module';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'}
];

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
