import React, {FC, useState} from 'react';
import NationsFilter from "./NationsFilter";
import ClassFilter from "./ClassFilter";
import LevelFilter from "./LevelFilter";
import {IFilter} from "../interfaces/Filter";

export interface ITopMenu{
    filterCallback: (filter: IFilter)=>void;
}

const TopMenu:FC<ITopMenu>= ({filterCallback}) => {

    const [filter, setFilter] = useState<IFilter>({
        level: null,
        nation: null,
        class: null
    })

    const updateFilter =(type: string, val: string | number)=>{
        setFilter({...filter, [type]:val});
        filterCallback({...filter, [type]:val});
    }

    return (
        <div className="top_menu">
            <div className="filters">
                <NationsFilter updateFilter={updateFilter} />
                <ClassFilter updateFilter={updateFilter} />
                <LevelFilter updateFilter={updateFilter} />
            </div>
            <button onClick={()=>filterCallback({nation:null,class:null,level: null})}>сбросить фильтры</button>
        </div>
    );
};

export default TopMenu;