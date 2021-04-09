import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { RentItem } from 'src/app/models/rentItem';
import { CardService } from 'src/app/services/card.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentService } from 'src/app/services/rent.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})

//Bu componentin ismi aslında payment olmalıydı.

export class PaymentComponent implements OnInit {
  cards: Card[] = [];
  rentItems: RentItem[] = [];
  dataLoaded = false;
  paymentForm: FormGroup;
  rentTotal: number;
  customerId: number;
  cardId: number =0
  totalPrice: number;

  constructor(
    private formBuilder: FormBuilder,
    private rentService: RentService,
    private rentalService: RentalService,
    private paymentService :PaymentService,
    private cardService: CardService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rentService.data.subscribe((response) => {      
      this.rentTotal = response.rentTotal
      this.customerId = response.customerId
    });

    this.rentItems = this.rentService.list();
    this.createPaymentForm(); 
    this.getMyCards();
  }

  createPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      cardholderFirstNameLastName: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      validThru: ['', Validators.required],
      cardValidationValue: ['', Validators.required],
      saveCard: [''],
    });
  }

  setCurrentCard(card: Card) {
    this.paymentForm.setValue({
      cardholderFirstNameLastName: card.cardholderFirstNameLastName,
      creditCardNumber: card.creditCardNumber,
      validThru: card.validThru,
      cardValidationValue: card.cardValidationValue,
      saveCard: false,
    });
    this.cardId = card.cardId;
  }
  
  payment() {
    if (this.paymentForm.valid) {
      let paymentModel = Object.assign({}, this.paymentForm.value);
      paymentModel.customerId = this.customerId;
      paymentModel.totalPrice = this.rentTotal;
      paymentModel.cardId = this.cardId;

      this.paymentService.payment(paymentModel).subscribe(
        (response) => {       
          if (paymentModel.saveCard) {
            this.cardService.saveCard(paymentModel).subscribe()
          }

          this.rentItems.map(rent =>{
            rent.returnDate = undefined
            this.rentalService.add(rent).subscribe(response=>{
              this.toastrService.success('Rental Eklendi', 'Kiralama');
            }, 
            responseError=>{
              console.log(responseError)
              this.toastrService.error("Rental Eklenemedi","Hata") 
            })
          })

          this.toastrService.success('Ödeme tamamlandı', 'Kiralama');

        },(responseError) => {
          this.toastrService.error("Ödeme alınamadı","Hata") 
        }
      );
    } else {
      this.toastrService.error('Formunuz  Eksik', 'Dikkat');
    }
  }
  getMyCards() {
    this.cardService.getCards(this.customerId).subscribe((response) => {
      this.cards = response.data; 
      this.dataLoaded = true;
    });
  }
}
