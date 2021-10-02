import React, { useState } from 'react';
import PopupMessage from 'Components/PopupMessage';
import { capitalString, tableFormatter } from 'utils/util';
import styles from './styles.module.scss';

// const filterOutId = (filterList) => filterList.filter(item => item?.id);
const SubmittalsTable = ({title, list}) => {
    const [showMessage, setShowMessage] = useState(false);
    const [viewItem, setViewItem] = useState();
    const headTitles = [ 'Deliverable', 'Pro Data', 'Shop Dwg', 'Eng', 'Sample', 'Status' ];
    return(
        <div className={styles.ProjectTableWrapper}>
            {showMessage
             ? <PopupMessage 
                setShowMessage={setShowMessage}
                viewItem={viewItem}/>
             :
                <>
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
                                    <td key={`status-view-${index}`}>
                                        {item?.status && item?.status.split('\n')[0]}
                                        <br />
                                        <button onClick={()=>{
                                            setShowMessage(!showMessage)
                                            setViewItem(item)
                                            }}>View</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>}
        </div>
    );
};

export default SubmittalsTable;