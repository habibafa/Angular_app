import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [ 
    { path: '', component: SearchComponent },
    { path: 'home', component: ContainerComponent },
    { path: 'products', component: ProductsComponent } // About page route 
 ]; 
 
 @NgModule({ 
     imports: [ 
         RouterModule.forRoot(routes) // Add routes to the app 
     ],
     exports: [RouterModule]
 })

 export class AppRoutingModule {}