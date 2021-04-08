import { CarDetailDto } from "./car-detail-dto";

export class RentItem{
    carId : number;
    carName : string;
    brandName : string;
    brandModel : string;
    modelYear : string;
    colorName : string;
    categoryName : string;
    dailyPrice : number;
    rentDate: Date;
    returnDate: Date; 
    customerId: number;
    totalPrice: number;

}