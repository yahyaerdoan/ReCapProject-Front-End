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
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
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

  {path : "brands/update", component : BrandUpdateComponent},
  {path : "categories/update", component : CategoryUpdateComponent},
  {path : "colors/update", component : ColorUpdateComponent},
  {path : "cars/update", component : CarUpdateComponent},

  {path : "brands/update/:brandId",component:BrandUpdateComponent},
  {path : "categories/update/:categoryId",component:CategoryUpdateComponent},
  {path : "cars/update/:carId",component:CarUpdateComponent},
  {path : "cplors/update/:colorId",component:ColorUpdateComponent},

  {path : "brands/list",component: BrandListComponent },
  {path : "categories/list",component: CategoryListComponent },
  {path : "colors/list",component: ColorListComponent },
  {path : "cars/list",component: CarListComponent },

  {path : "cars/filter/:brandId/:colorId/:categoryId/:carId", component:CarDetailDtoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
