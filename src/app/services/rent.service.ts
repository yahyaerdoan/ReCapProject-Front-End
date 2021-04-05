import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarDetailDto } from '../models/car-detail-dto';
import { CardPayment } from '../models/cardPayment';
import { RentItem } from '../models/rentItem';
import { RentItems } from '../models/rentItems';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private cardPayment = new CardPayment()
  private dataSource = new BehaviorSubject<CardPayment>(this.cardPayment);
  data = this.dataSource.asObservable()

  constructor() { }

  addToRent (rentItem : RentItem ){
    let item =RentItems.find(c=> c.carId === rentItem.carId); //Gönderilen aracın Id'si varsa ekle
    if(item){ //item varsa 1 artıracak      
    }
    else{
      //rentItem.quantity =1;
      RentItems.push(rentItem) //sepete ekler
      this.cardPayment.customerId==rentItem.customerId
      this.calculateRent
    }
  }

  removeFromRent(rentItem : RentItem ){
    let item =RentItems.find(c=> c.carId === rentItem.carId);
    RentItems.splice(RentItems.indexOf(item),1);
    this.calculateRent();
  }
  calculateRent(){
    let total = RentItems.reduce((acc, val) => acc += val.totalPrice, 0)
    this.cardPayment.rentTotal = total
    this.dataSource.next(this.cardPayment)
  }

  list() : RentItem[]{ //kiralama sepetini listeliyoruz.
    return RentItems;
  }

}
