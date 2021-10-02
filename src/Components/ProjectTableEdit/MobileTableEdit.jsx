import React from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import styles from './styles.module.scss';

const MobileTableEdit = ({inputField, formInputChange, setShowMessage, showMessage, setViewItem, item}) => {
    const deliverableInput = inputField.find(inputList => inputList.name === "deliverable");
    return(
        <div className={styles.MobileWrapper}>

            <div className={styles.MobileDeliverable}>
                <span>{
                   deliverableInput && <MuiInputField
                        bgColor="#fff"
                        type={deliverableInput.type}
                        defaultValue={item?.[deliverableInput.defaultValue]}
                        name={deliverableInput.name}
                        label={deliverableInput.label}
                        onChange={(e)=> formInputChange(e, item) }/>}
                </span>
            </div>
            <div className={styles.MobileCheck}>
                { inputField.map((inputList, idx) => 
                    (inputList.type === "checkbox") && 
                    <span className={styles.MobileCheckSingle}>
                        <span>{inputList.name}</span>
                        <MuiInputField
                            key={`${idx}-check-list`}
                            bgColor="#fff"
                            type={inputList.type}
                            defaultValue={item?.[inputList.defaultValue]}
                            name={inputList.name}
                            label={inputList.label}
                            onChange={(e)=> formInputChange(e, item) }/>
                    </span>
                )}
            </div>
            <div className={styles.MobileStatus}>
                <span className={styles.MobileSubTitle}>Status</span>
                <span>{item?.status && item?.status.split('\n')[0]}</span>
                <button onClick={()=>{
                    setShowMessage(!showMessage)
                    setViewItem(item)
                    }}>Edit Status</button>
            </div>
        </div>
    );
};

export default MobileTableEdit;

// import { Check, Close } from '@mui/icons-material';
// <Check color="success"/> : <Close color="error"/>