import React from 'react';
import { capitalString } from 'utils/util';
import './styles.scss';

const ProjectTable = ({title, list}) => {
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
                        console.log('item-> ', item)

                        console.log('itemList-> ', itemList)
                        return <tr key={`list-${index}`} className="tbodyTr">
                            {itemList.map((val, idx) => {
                                // const newVal = (typeof val[1] === "string" && val[1]) || (typeof val[1] === "boolean" && val[1] === true ? "Y" : "N") ;
                                return <td key={`val-${idx}`}>
                                    {/* {newVal } */}
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