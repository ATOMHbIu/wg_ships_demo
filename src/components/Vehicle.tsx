import React from 'react';
import {IVehicle} from "../interfaces/Vehicle";
import {LevelMap} from "../helpers";

interface IVehicleWithCallback extends IVehicle{
    showCallback: (id: string) => void;
}

const Vehicle = ({...props}:IVehicleWithCallback) => {
    return (
        <div className="item" onClick={()=>props.showCallback(props.id)}>
            <div className="main_info">
                <div className="header">{props.title}</div>
                <img src={props.icons.medium} alt={props.title}/>
            </div>
            <div className="tech_info">
                <img className="nation" src={props.nation.icons.small} alt={props.nation.title} title={props.nation.title}/>
                <div className="type">
                    <img src={props.type.icons.default} alt={props.type.title} title={props.type.title}/>
                </div>
                <div className="rank" title={props.level.toString()}>{LevelMap.get(props.level)}</div>
            </div>
            <div className="description_info">
                {props.description}
            </div>
        </div>
    );
};

export default Vehicle;