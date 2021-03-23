import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarDetailImageComponent } from './components/car-detail-image/car-detail-image.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path : "",pathMatch : "full", component : CarDetailDtoComponent},
  {path : "cars", component : CarDetailDtoComponent},
  {path : "cars/category/:categoryId", component : CarDetailDtoComponent},
  {path : "cars/cars/:carId", component : CarDetailDtoComponent},  
  {path : "cars/image/:carId", component : CarDetailImageComponent},
  {path : "cars/brand/:brandId", component : CarDetailDtoComponent},
  {path : "cars/color/:colorId", component : CarDetailDtoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
