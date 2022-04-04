import React, {FC} from 'react';
import { Query } from 'react-apollo';
import {Queries} from "../queries";
import {IVehicles} from "../interfaces/Vehicle";
import {convertLevel} from "../helpers";

interface IFullVehicleInfo{
    fullInfoVehicle: string | null;
}

const FullVehicleInfo:FC<IFullVehicleInfo> = ({fullInfoVehicle}) => {
    if (!fullInfoVehicle) {
        return <>Vehicle not selected</>
    }
    return (
        <Query<IVehicles> query={Queries.GET_BY_ID(fullInfoVehicle)}>
            {({loading, error, data}) => {
                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error :(</div>;
                console.log(data)
                return (
                    <div className="fullInfo">
                        {data&&
                            <>
                                <div className="title">{data.vehicles[0].type.title} {data.vehicles[0].title}</div>
                                <img src={data.vehicles[0].icons.large} alt={data.vehicles[0].type.title} className="preview"/>
                                <div className="description">
                                    <div className="infoItem">
                                        <div className="infoTitle">Страна: </div>
                                        <div className="infoDescription"> {data.vehicles[0].nation.title}</div>
                                        <img src={data.vehicles[0].nation.icons.small} alt={data.vehicles[0].nation.title}/>
                                    </div>
                                    <div className="infoItem">
                                        <div className="infoTitle">Класс корабля: </div>
                                        <div className="infoDescription"> {data.vehicles[0].type.title}</div>
                                        <img src={data.vehicles[0].type.icons.default} alt={data.vehicles[0].type.title}/>
                                    </div>
                                    <div className="infoItem">
                                        <div className="infoTitle">Уровень корабля: </div>
                                        <div className="infoDescription"> {data.vehicles[0].level}</div>
                                        <div className="">"{convertLevel(data.vehicles[0].level)}"</div>
                                    </div>
                                </div>
                                <div className="textInfo">{data.vehicles[0].description}</div>
                            </>
                        }
                    </div>
                )
            }}
        </Query>
    )
};

export default FullVehicleInfo;