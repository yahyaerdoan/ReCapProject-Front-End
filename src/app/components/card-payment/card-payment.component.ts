import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardPayment } from 'src/app/models/cardPayment';
import { Rental } from 'src/app/models/rental';
import { CardPaymentService } from 'src/app/services/card-payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  creditCardNumber : string;
  validThru : string;
  cardValidationValue  : string;

  @Input() rentForPayment:Rental;
  
  constructor(private rentalService:RentalService, 
    private paymentService:CardPaymentService, 
    private toastrService: ToastrService) { }
  
  ngOnInit(): void {
  }

//   addPaymen()
//   {
//     let rent:Rental = this.rentForPayment;
//     let cardpayment:CardPayment = {
//       creditCardNumber: this.creditCardNumber,
//       validThru:this.validThru,
//       cardValidationValue:this.cardValidationValue,
//       // price:this.rentForPayment.price,
//       // customerID:this.rentForPayment.customerID
//     };
//      this.paymentService.addPayment(payment).subscribe(response => {
//       this.toastrService.success("Your payment transaction has been completed successfully");
//    });
//    this.rentalService.addRental(rent).subscribe(response => {
//     this.toastrService.success("Car rental process has been completed successfully");
    
//  });
//   }





}
