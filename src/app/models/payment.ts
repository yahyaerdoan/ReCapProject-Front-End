export interface Payment {
  paymentId: number;
  customerId: number;
  cardId: number;
  paymentDate: Date;
  totalPrice: number;
}
