import React from 'react';
import { Check, Close } from '@mui/icons-material';
import styles from './styles.module.scss';

const MobileTable = ({setShowMessage, showMessage, setViewItem, item}) => {
    return(
        <div className={styles.MobileWrapper}>

            <div className={styles.MobileDeliverable}>
                <span className={styles.MobileSubTitle}>deliverable:</span>
                <span>{item?.deliverable}</span>
            </div>
            <div className={styles.MobileCheck}>
                { Object.entries(item).map(([key, value]) => {
                    return (key !== 'deliverable' && key !== 'status' && key !== 'id') && 
                        <span className={styles.MobileCheckState}>{`${key}: `} {!!value ? <Check color="success"/> : <Close color="error"/>}</span>
                })}
            </div>
            <div className={styles.MobileStatus}>
                <span className={styles.MobileSubTitle}>Status</span>
                <span>{item?.status && item?.status.split('\n')[0]}</span>
                <button onClick={()=>{
                    setShowMessage(!showMessage)
                    setViewItem(item)
                    }}>View History</button>
            </div>
        </div>
    );
};

export default MobileTable;

// import { Check, Close } from '@mui/icons-material';
// <Check color="success"/> : <Close color="error"/>