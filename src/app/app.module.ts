import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsService } from './products/products.service';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    ChildComponent,
    ParentComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule,
    AppRoutingModule

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
