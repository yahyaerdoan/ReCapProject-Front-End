import { responseModel } from "./responseModel";

export interface listResponseModel<T> extends responseModel{
    data : T [];
}