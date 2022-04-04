interface IVehicleNation{
    name: string;
    title: string;
    colour: string;
    icons: {
        small: string;
        medium: string | null;
        large: string;
    };
}

interface IVehicleType{
    name: string;
    title: string;
    icons: {
        default: string;
    };
}

export type IVehicleIconsType = {
    default: string;
    small: string;
    medium: string;
    large: string;
}

export interface IVehicle{
    id: string;
    title: string;
    description: string
    icons: IVehicleIconsType;
    level: number;
    type: IVehicleType;
    nation: IVehicleNation
}

export interface IVehicles{
    vehicles: IVehicle[]
}