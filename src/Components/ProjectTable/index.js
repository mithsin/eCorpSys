import React from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import './styles.scss';

const ProjectTable = ({title, list}) => {
    console.log('list: ', list)
    const allKeys = Object.keys(list[0]);
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
                    {list?.map((item, index)=>{
                        const itemList = Object.entries(item);
                        // console.log('item-> ', item)

                        // console.log('itemList-> ', itemList)
                        return <tr key={`list-${index}`} className="tbodyTr">
                            {itemList.map((val, idx) => {
                                const newVal = tableFormatter(val);
                                return <td key={`val-${idx}`}>
                                    {newVal?.type === "array" 
                                        ? <div>{newVal.value.map(list => <span>{list}</span>)}</div>
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