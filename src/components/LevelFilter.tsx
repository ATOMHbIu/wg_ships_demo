import React, {FC} from 'react';
import {IFilterOption} from "../interfaces/Filter";

const LevelFilter:FC<IFilterOption>  = ({updateFilter}) => {
    const data = [
        {name: 1,
            title: "I"},
        {name: 2,
            title: "II"},
        {name: 3,
            title: "III"},
        {name: 4,
            title: "IV"},
        {name: 5,
            title: "V"},
        {name: 6,
            title: "VI"},
        {name: 7,
            title: "VII"},
        {name: 8,
            title: "VIII"},
        {name: 9,
            title: "IX"},
        {name: 10,
            title: "IX"},

    ]
    return (
        <div className="levelFilter">
            <div className="title">Выберите уровень корабля:</div>
            <div className="items">
                {data.map((n)=>(
                    <div key={n.title} className="item" onClick={()=>updateFilter("level", n.name)}>
                        {n.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LevelFilter;