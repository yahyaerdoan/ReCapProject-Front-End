import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarDetailImageComponent } from './components/car-detail-image/car-detail-image.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CustomerDetailDtoComponent } from './components/customer-detail-dto/customer-detail-dto.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { RentalDetailDtoComponent } from './components/rental-detail-dto/rental-detail-dto.component';
import { HomeComponent } from './components/home/home.component';
import { ImageComponent } from './components/image/image.component';
import { ImageAddComponent } from './components/image-add/image-add.component';
import { ImageListComponent } from './components/image-list/image-list.component';

const routes: Routes = [
  {path : "",pathMatch : "full", component : HomeComponent},
  {path : "cars", component : CarDetailDtoComponent},
  
  {path : "cars/category/:categoryId", component : CarDetailDtoComponent},
  {path : "cars/cars/:carId", component : CarDetailDtoComponent},  
  {path : "cars/image/:carId", component : CarDetailImageComponent},
  {path : "cars/brand/:brandId", component : CarDetailDtoComponent},
  {path : "cars/color/:colorId", component : CarDetailDtoComponent},

  {path : "cars/add", component : CarAddComponent , canActivate : [LoginGuard]},
  {path : "brands/add", component : BrandAddComponent, canActivate : [LoginGuard]},
  {path : "colors/add", component : ColorAddComponent, canActivate : [LoginGuard]},
  {path : "categories/add", component : CategoryAddComponent, canActivate : [LoginGuard]},

  {path : "images/add", component : ImageAddComponent, canActivate : [LoginGuard]},
  {path : "image/:carId", component : ImageAddComponent, canActivate:[LoginGuard]},

  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "profile", component : ProfileComponent}, 

  {path : "brands/update", component : BrandUpdateComponent, canActivate : [LoginGuard]},
  {path : "categories/update", component : CategoryUpdateComponent, canActivate : [LoginGuard]},
  {path : "colors/update", component : ColorUpdateComponent, canActivate : [LoginGuard]},
  {path : "cars/update", component : CarUpdateComponent, canActivate : [LoginGuard]},

  {path : "brands/update/:brandId",component:BrandUpdateComponent, canActivate : [LoginGuard]},
  {path : "categories/update/:categoryId",component:CategoryUpdateComponent, canActivate : [LoginGuard]},
  {path : "cars/update/:carId",component:CarUpdateComponent, canActivate : [LoginGuard]},
  {path : "colors/update/:colorId",component:ColorUpdateComponent, canActivate : [LoginGuard]},

  {path : "brands/list",component: BrandListComponent , canActivate : [LoginGuard]},
  {path : "categories/list",component: CategoryListComponent, canActivate : [LoginGuard] },
  {path : "colors/list",component: ColorListComponent, canActivate : [LoginGuard] },
  {path : "cars/list",component: CarListComponent, canActivate : [LoginGuard] },
  {path : "images/list",component: ImageListComponent, canActivate : [LoginGuard] },

  {path : "cars/rentals",component: RentalComponent },
  {path : "cars/rentals/:carId",component: RentalComponent, canActivate : [LoginGuard]},
  {path : "rentalDetailDtos/list",component: RentalDetailDtoComponent, canActivate : [LoginGuard]},

  {path : "cartlist",component: CartListComponent },
  {path : "cars/image/:carId/cartlist",component: CartListComponent },

  {path : "payment",component: PaymentComponent, canActivate : [LoginGuard]},

  {path : "customers",component: CustomerComponent},
  {path : "customersDetailDtos",component: CustomerDetailDtoComponent},

  {path : "cars/filter/:brandId/:colorId/:categoryId/:carId", component:CarDetailDtoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
