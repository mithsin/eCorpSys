import React from 'react';
import { capitalString, tableFormatter } from 'utils/util';
import styles from './styles.module.scss';

// const filterOutId = (filterList) => filterList.filter(item => item?.id);
const SubmittalsTable = ({title, list}) => {
    const headTitles = [ 'Deliverable', 'Pro Data', 'Shop Dwg', 'Eng', 'Sample', 'Status' ];
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
                            <td>{item.proData ? "Y" : "N"}</td>
                            <td>{item.shopDwg ? "Y" : "N"}</td>
                            <td>{item.eng ? "Y" : "N"}</td>
                            <td>{item.sample ? "Y" : "N"}</td>
                            <td>{item.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SubmittalsTable;