import React, {FC} from 'react';
import {useQuery} from "react-apollo";
import {Queries} from "../queries";
import {INations} from "../interfaces/Nations";
import {IFilterOption} from "../interfaces/Filter";

const NationsFilter:FC<IFilterOption>  = ({updateFilter}) => {
    const { data, loading, error } = useQuery<INations>(Queries.GET_NATIONS);
    if(loading) return <>Loading ...</>
    if(error) return <>{error}</>
    return (
        <div className="nationsFilter">
            <div className="title">Выберите страну:</div>
            <div className="items">
                {data&&data.nations.map((n)=>(
                    <div key={n.title} className="item" onClick={()=>updateFilter("nation", n.name)}>
                        <img src={n.icons.tiny} alt={n.title} title={n.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NationsFilter;