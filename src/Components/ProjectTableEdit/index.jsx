import React, { useState, useEffect } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import MobileTableEdit from './MobileTableEdit';
import PopupMessage from 'Components/PopupMessage';
import useCurrentWidth from 'hooks/useCurrentWidth';
import styles from './styles.module.scss';

const ProjectTableEdit = ({edit, setProject, project, newObjLine, inputField, newKey, headTitles, title, list=[{}]}) => {
    const [formInputs, setFormInputs] = useState();
    const { MOBILE_VIEW } = useCurrentWidth();
    const [showMessage, setShowMessage] = useState(false);
    const [viewItem, setViewItem] = useState();
    useEffect(()=>{
        if(formInputs){
            setProject({
                ...project,
                [newKey]: formInputs
            })
        }
    },[formInputs])
    const formInputChange = (e, item) => {
        console.log('e.target-->: ', e)
        console.log('e.target.type-->: ', e.target.type)
        console.log('e-check-type === checkbox -->: ', e.target.type === 'checkbox' )
        console.log('e.target.checked-->: ', e.target.checked)
        const newObj = {
            ...item,
            [e.target.name]: (e.target.type === 'checkbox' && e.target.checked) || e.target.value
        }
        const updateList = list.map(list => list.id === item.id ? newObj : list);
        console.log('updateList--->: ', updateList)
        setFormInputs(updateList)
    };

    const onClickAddLine = () => {
        setFormInputs(list.concat(newObjLine))
    }
    const onClickRemoveLine = (id) => {
        setFormInputs(formInputs.filter(item => item.id !== id))
    }

    return(
        <div className="ProjectTableWrapper">

            {showMessage
             ? <PopupMessage 
                edit={edit}
                newKey={newKey}
                setShowMessage={setShowMessage}
                formInputChange={formInputChange}
                viewItem={viewItem}/>
             : MOBILE_VIEW 
             ? <>
                 <h2>{title}</h2>
                 {list?.map((item, index)=> {
                    return (
                        <MobileTableEdit key={`MobileTableEdit-${index}`} 
                            inputField={inputField}
                            formInputChange={formInputChange}
                            setShowMessage={setShowMessage}
                            showMessage={showMessage}
                            setViewItem={setViewItem}
                            item={item}/>)
               
                })}
             </>
             :<>
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
                        {list?.map((item, index)=> {
                            return <tr key={`${newKey}Edit-list-${index}`} className={styles.tbodyTr}>
                                {
                                    inputField.map((inputList, index) => {
                                        return inputList.name === "status"
                                            ? <td key={`${newKey}Edit-input-${index}`}>
                                                {item?.status && item?.status.split('\n')[0]}
                                                <br />
                                                <button onClick={()=>{
                                                    setShowMessage(!showMessage)
                                                    setViewItem(item)
                                                    }}>View History</button>
                                            </td>
                                            : <td key={`${newKey}Edit-input-${index}`}>
                                                <MuiInputField
                                                    bgColor="#fff"
                                                    type={inputList.type}
                                                    defaultValue={item?.[inputList.defaultValue]}
                                                    name={inputList.name}
                                                    label={inputList.label}
                                                    onChange={(e)=> formInputChange(e, item) }/>
                                            </td>
                                    })
                                }
                                {/* <td>
                                    <RemoveCircle sx={{ color: "red" }} onClick={()=>onClickRemoveLine(item.id)}/>
                                </td> */}
                            </tr>
                        })}
                    </tbody>
                </table>
                </>
            }
            <div className={styles.FlexWrap} onClick={onClickAddLine}>
                <p>Add new row</p>
                <AddCircle color="success" />
            </div>
        </div>
    );
};

export default ProjectTableEdit;