import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CardPayment } from 'src/app/models/cardPayment';
import { Rental } from 'src/app/models/rental';
import { RentItem } from 'src/app/models/rentItem';
import { CardPaymentService } from 'src/app/services/card-payment.service';
import { RentService } from 'src/app/services/rent.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css'],
})
export class CardPaymentComponent implements OnInit {
  cardPayments: CardPayment[] = [];
  rentItems: RentItem[] = [];
  dataLoaded = false;
  cardpaymentForm: FormGroup;
  rentTotal: number;
  customerId: number;
  cardPaymentId?: number;
  totalPrice: number;

  constructor(
    private formBuilder: FormBuilder,
    private rentService: RentService,
    private rentalService: RentalService,
    private cardPaymentService: CardPaymentService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rentService.data.subscribe((response) => {
      (this.rentTotal = response.rentTotal),
        (this.customerId = response.customerId);
        console.log(this.customerId)
    });
    this.createCardPaymentForm(); 
    this.getMyCardPayment();
  }

  createCardPaymentForm() {
    this.cardpaymentForm = this.formBuilder.group({
      cardholderFirstNameLastName: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      validThru: ['', Validators.required],
      cardValidationValue: ['', Validators.required],
      saveCardPayment: [''],
    });
  }

  setCurrentCard(cardPayment: CardPayment) {
    this.cardpaymentForm.setValue({
      cardholderFirstNameLastName: cardPayment.cardholderFirstNameLastName,
      creditCardNumber: cardPayment.creditCardNumber,
      validThru: cardPayment.validThru,
      cardValidationValue: cardPayment.cardValidationValue,
      saveCardPayment: false,
    });
    this.cardPaymentId = cardPayment.cardPaymentId;
  }

  cardPayment() {
    if (this.cardpaymentForm.valid) {
      let cardPaymentModel = Object.assign({}, this.cardpaymentForm.value);
      cardPaymentModel.customerId = this.customerId;
      cardPaymentModel.total = this.rentTotal;
      cardPaymentModel.cardPaymentId = this.cardPaymentId;

      this.cardPaymentService.add(cardPaymentModel).subscribe(
        (response) => {   
               
          this.toastrService.success(response.message, 'Başarılı');
          if (cardPaymentModel.saveCard) {
            this.cardPaymentService.add(cardPaymentModel).subscribe()
          }
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz  Eksik', 'Dikkat');
    }
  }

  getMyCardPayment() {
    this.cardPaymentService.getCardPayments(this.customerId).subscribe((response) => {
      this.cardPayments = response.data;
      debugger;
      this.dataLoaded = true;
    });
  }
}
