import React from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import './styles.scss';

const filterOutId = (filterList) => filterList.filter(item => !item?.id);
const ProjectTable = ({title, list}) => {
    const allKeys = Object.keys(filterOutId(list[0]));
    return(
        <div className="ProjectTableWrapper">
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        {allKeys?.map((title, index)=>
                            <th key={`title-${index}`}><b>{capitalString(title)}</b></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {filterOutId(list)?.map((item, index)=>{
                        const itemList = Object.entries(item);
                        return <tr key={`list-${index}`} className="tbodyTr">
                            {itemList.map((val, idx) => {
                                const newVal = tableFormatter(val);
                                return <td key={`val-${idx}`}>
                                    {newVal?.type === "array" 
                                        ? newVal?.value?.map((list, idx) => 
                                            <tr key={`span-${idx}`}>
                                                <td >{`${list.date} ${list.message}`}</td>
                                            </tr>
                                            )
                                        : newVal?.value
                                    }
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;