import React from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import styles from './styles.module.scss';

// const filterOutId = (filterList) => filterList.filter(item => item?.id);
const MaterialTable = ({title, list}) => {
    const headTitles = [ "deliverable", "order", "inProdtn", "ship", "dlvrd", "status" ];
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
                            <td>{item.order ? "Y" : "N"}</td>
                            <td>{item.inProdtn ? "Y" : "N"}</td>
                            <td>{item.ship ? "Y" : "N"}</td>
                            <td>{item.dlvrd ? "Y" : "N"}</td>
                            <td>{item.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MaterialTable;