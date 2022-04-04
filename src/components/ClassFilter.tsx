import React, {FC} from 'react';
import {useQuery} from "react-apollo";
import {Queries} from "../queries";
import {IVehicleTypes} from "../interfaces/VehicleType";
import {IFilterOption} from "../interfaces/Filter";

const ClassFilter:FC<IFilterOption>  = ({updateFilter}) => {
    const { data, loading, error } = useQuery<IVehicleTypes>(Queries.GET_TYPES);
    if(loading) return <>Loading ...</>
    if(error) return <>{error}</>
    return (
        <div className="classFilter">
            <div className="title">Выберите тип корабля:</div>
            <div className="items">
                {data&&data.vehicleTypes.map((n)=>(
                    <div key={n.title} className="item" onClick={()=>updateFilter("class", n.name)}>
                        <img src={n.icons.default} alt={n.title} title={n.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassFilter;