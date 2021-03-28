import { responseModel } from "./responseModel";

export interface SingleResponseModel<T> extends responseModel{
    data:T
}