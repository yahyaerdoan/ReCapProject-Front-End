import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ImageComponent } from './components/image/image.component';
import { UserComponent } from './components/user/user.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailDtoComponent } from './components/rental-detail-dto/rental-detail-dto.component';
import { CustomerDetailDtoComponent } from './components/customer-detail-dto/customer-detail-dto.component';
import { CarDetailImageComponent } from './components/car-detail-image/car-detail-image.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterCarDetailDtoPipe } from './pipes/filter-car-detail-dto.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './components/footer/footer.component';
import { RentSummaryComponent } from './components/rent-summary/rent-summary.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { CategoryAddComponent } from './components/category-add/category-add.component';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CategoryComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,   
    ImageComponent,
    UserComponent,
    CarDetailDtoComponent,
    RentalComponent,
    RentalDetailDtoComponent,
    CustomerDetailDtoComponent,
    CarDetailImageComponent,
    FilterCarDetailDtoPipe, 
    FilterColorPipe,
    FilterBrandPipe,   
    FilterCategoryPipe,
    VatAddedPipe,
    FooterComponent,
    RentSummaryComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    LoginComponent,   
    FilterCarPipe, CategoryAddComponent,
  
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  providers: [{ //önce bütün servisler için global TTP_INTERCEPTORS yapıyoruz.
    provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
