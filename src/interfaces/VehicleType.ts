import {IVehicleIconsType} from './Vehicle'

export interface IVehicleType{
    name: string;
    title: string;
    icons: IVehicleIconsType;
}

export interface IVehicleTypes{
    vehicleTypes: IVehicleType[];
}