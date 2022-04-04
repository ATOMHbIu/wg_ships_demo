import {IVehicleIconsType} from './Vehicle'

interface NationIcons extends IVehicleIconsType {
    tiny: string;
}

export interface INation{
    name: string;
    title: string;
    color: string;
    icons: NationIcons;
}

export interface INations{
    nations: INation[];
}