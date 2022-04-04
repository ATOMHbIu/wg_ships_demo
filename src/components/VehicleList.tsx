import React, {FC, useState} from 'react';
import {IVehicles} from "../interfaces/Vehicle";

import Vehicle from "./Vehicle";
import FullVehicleInfo from "./FullVehicleInfo";

const VehicleList:FC<IVehicles> = (data) => {
    const [displayFullInfo, setDisplayFullInfo] = useState(false);
    const [fullInfoVehicle, setFullInfoVehicle] = useState<string | null>(null);
    const showFullInfo=(id: string)=>{
        setDisplayFullInfo(true);
        setFullInfoVehicle(id);
    }
    return(
        <div className="vehiclesInfoWindow" >
            {displayFullInfo &&
                <>
                    <div className="shadow" onClick={()=>{setDisplayFullInfo(false)}} />
                    <FullVehicleInfo fullInfoVehicle={fullInfoVehicle}/>
                </>
            }
            <div className="ship_list">
                {data.vehicles.map((v)=>(
                        <Vehicle key={v.id} {...v} showCallback={showFullInfo}/>
                ))}
            </div>
        </div>
    )
};

export default VehicleList;