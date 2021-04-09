export class Card {
    cardId? : number;
    customerId : number;
    cardholderFirstNameLastName : string;
    creditCardNumber : string;
    validThru : string;
    cardValidationValue  : string;    
}

export class CartDetail {
    customerId : number;
    rentTotal:number; 
}