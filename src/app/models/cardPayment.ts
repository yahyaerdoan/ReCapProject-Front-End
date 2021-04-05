export interface CardPayment{
    cardPaymentId? : number;
    customerId : number;
    cardholderFirstNameLastName : string;
    creditCardNumber : string;
    validThru : string;
    cardValidationValue  : string;
    extractofAccount  : number; 
    
}

export class CardPayment {
    customerId:number;
    rentTotal:number; 
}