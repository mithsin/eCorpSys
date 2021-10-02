import React, { useState } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { HighlightOff } from '@mui/icons-material';
import moment from 'moment';
import styles from './styles.module.scss';

const PopupMessage = ({edit=false, newKey, viewItem, setShowMessage, formInputChange}) => {
    const [inputChange, setInputChange] = useState('');
    const [statusMessage, setStatusMessage] = useState(viewItem?.status)
    const onClickSubmit = () => {
        setStatusMessage(`${moment().format('L')}: ${inputChange} \n ${statusMessage}`)
        formInputChange({target: {category: newKey, name: "status", type: "text", value: `${moment().format('L')}: ${inputChange} \n ${statusMessage}`}}, viewItem)
    };
    const onClickCancel = () => {
        setShowMessage(false)
    };
    return(
        <div className={styles.OuterWrap}>
            <div className={styles.InnerPosition}>
                <div className={styles.MessageBraket}>
                    <div className={styles.CloseBox}><span onClick={onClickCancel}><HighlightOff /></span></div>
                    <div className={styles.MessageBox}>
                        {statusMessage.split('\n').map((ele, index)=> <p className={styles.StatusMessage} key={`message-text-${index}`}>{ele}</p>)}
                    </div>
                    {edit && <>
                        <div className={styles.InputBox}>
                            <MuiInputField
                                bgColor="#fff"
                                type='text'
                                name='status'
                                label='status'
                                onChange={(e)=> setInputChange(e.target.value)}/>
                        </div>
                        <div className={styles.ButtonWrap}>
                        <MuiButton 
                            props={{
                                bgColor: "#4bb543",
                                hbgColor: "#90ee90",
                                labelColor: "#000",
                            }}
                            label="SUBMIT"
                            onClick={ onClickSubmit }/>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default PopupMessage;