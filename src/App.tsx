import React, {useEffect, useState} from 'react';
import './App.css';
import TopMenu from "./components/TopMenu";
import VehicleList from "./components/VehicleList";
import {useQuery} from "react-apollo";
import {IVehicles} from "./interfaces/Vehicle";
import {Queries} from "./queries";
import {IFilter} from "./interfaces/Filter";

function App() {

    const { data, loading, error } = useQuery<IVehicles>(Queries.GET_VEHICLES);
    const [vehicles, setVehicles] = useState<IVehicles>();

    const updateItems =  (filter: IFilter) =>{
        if(data){
            let filtered = data.vehicles;
            if(filter.nation)
                filtered = filtered.filter((el)=>{
                    return el.nation.name===filter.nation;
                })
            if(filter.level)
                filtered = filtered.filter((el)=>{
                    return el.level === filter.level;
                })
            if (filter.class)
                filtered = filtered.filter((el)=>{
                    return el.type.name === filter.class;
                })
            setVehicles({vehicles: filtered});
        }
    }

    useEffect(() => {
        if(!loading && data){
            setVehicles(data);
        }
    }, [loading, data]);

  return (
        <div className="App">
            {vehicles&&
                <>
                    <TopMenu filterCallback={updateItems}/>
                    <VehicleList {...vehicles}/>
                </>
            }
        </div>

  );
}

export default App;
