import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

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
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FooterComponent } from './components/footer/footer.component';
import { RentSummaryComponent } from './components/rent-summary/rent-summary.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';

import { ColorListComponent } from './components/color-list/color-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpirationInterceptor } from './interceptors/expiration.interceptor';
import { PaymentComponent } from './components/payment/payment.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { HomeComponent } from './components/home/home.component';
import { ColorDirective } from './directives/color.directive';
import { ImageAddComponent } from './components/image-add/image-add.component';


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
    CarUpdateComponent,
    ColorAddComponent,
    BrandAddComponent,
    LoginComponent,   
    FilterCarPipe, 
    CategoryAddComponent, 
    BrandUpdateComponent, 
    ColorUpdateComponent, 
    ColorUpdateComponent, 
    BrandListComponent, 
    CategoryListComponent, 
    CategoryUpdateComponent,
    CarListComponent,
    ColorListComponent, 
    RegisterComponent, 
    ProfileComponent,
    PaymentComponent,
    CartListComponent,
    HomeComponent,
    ColorDirective,
    ImageAddComponent,
    

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
    JwtModule,

  ],
  providers: [ //önce bütün servisler için global TTP_INTERCEPTORS yapıyoruz.
    DatePipe,
    {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true},
    {provide: HTTP_INTERCEPTORS, useClass: ExpirationInterceptor, multi: true }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
