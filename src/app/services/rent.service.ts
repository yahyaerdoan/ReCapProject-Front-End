import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarDetailDto } from '../models/car-detail-dto';
import { Card, CartDetail } from '../models/card';
import { RentItem } from '../models/rentItem';
import { RentItems } from '../models/rentItems';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private cartDetail = new CartDetail()
  private dataSource = new BehaviorSubject<CartDetail>(this.cartDetail);
  data = this.dataSource.asObservable()

  constructor() { }

  addToRent (rentItem : RentItem ){
      RentItems.push(rentItem) //sepete ekler
      this.cartDetail.customerId = rentItem.customerId
      this.calculateRent()  
  }

  removeFromRent(rentItem : RentItem ){
    let item =RentItems.find(c=> c.carId === rentItem.carId);
    RentItems.splice(RentItems.indexOf(item),1);
    this.calculateRent();
  }

  calculateRent(){
    let total = RentItems.reduce((acc, val) => acc += val.totalPrice, 0)
    this.cartDetail.rentTotal = total
    this.dataSource.next(this.cartDetail)
  }

  list() : RentItem[]{ //kiralama sepetini listeliyoruz.
    return RentItems;
  }

}
