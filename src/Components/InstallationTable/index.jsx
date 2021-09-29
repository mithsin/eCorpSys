import React from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import styles from './styles.module.scss';

// const filterOutId = (filterList) => filterList.filter(item => item?.id);
const MaterialTable = ({title, list}) => {
    const headTitles = [ "deliverable", "comopleted", "ready", "start", "end", "status" ];
    return(
        <div className={styles.ProjectTableWrapper}>
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        {headTitles?.map((title, index)=>
                            <th key={`title-${index}`}><b>{title}</b></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {list?.map((item, index)=>
                        <tr key={`list-${index}`} className={styles.tbodyTr}>
                            <td>{item.deliverable}</td>
                            <td>{item.comopleted ? "Y" : "N"}</td>
                            <td>{item.ready ? "Y" : "N"}</td>
                            <td>{item.start ? "Y" : "N"}</td>
                            <td>{item.end ? "Y" : "N"}</td>
                            <td>{item.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MaterialTable;