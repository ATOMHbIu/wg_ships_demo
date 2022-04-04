import React, {FC} from 'react';
import {IFilterOption} from "../interfaces/Filter";
import {LevelMap} from "../helpers";

const LevelFilter:FC<IFilterOption>  = ({updateFilter}) => {

    return (
        <div className="levelFilter">
            <div className="title">Выберите уровень корабля:</div>
            <div className="items">
                {Array.from(LevelMap ,([k,v])=>(
                    <div key={k} className="item" onClick={()=>updateFilter("level", k)}>
                        {v}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LevelFilter;