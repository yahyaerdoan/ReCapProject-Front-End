import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarDetailImageComponent } from './components/car-detail-image/car-detail-image.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path : "",pathMatch : "full", component : CarDetailDtoComponent},
  {path : "cars", component : CarDetailDtoComponent},
  {path : "cars/category/:categoryId", component : CarDetailDtoComponent},
  {path : "cars/cars/:carId", component : CarDetailDtoComponent},  
  {path : "cars/image/:carId", component : CarDetailImageComponent},
  {path : "cars/brand/:brandId", component : CarDetailDtoComponent},
  {path : "cars/color/:colorId", component : CarDetailDtoComponent},
  {path : "cars/add", component : CarAddComponent , canActivate : [LoginGuard]},
  {path : "brands/add", component : BrandAddComponent},
  {path : "colors/add", component : ColorAddComponent},
  {path : "categories/add", component : CategoryAddComponent},
  {path : "login", component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
