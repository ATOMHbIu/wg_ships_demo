export interface IFilterOption{
    updateFilter: (type: string, val: string | number)=>void;
}

export interface IFilter{
    level: number | null;
    nation: string | null;
    class: string | null;
}