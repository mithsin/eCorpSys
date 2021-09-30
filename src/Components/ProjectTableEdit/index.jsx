import React, { useState, useEffect } from 'react';
import {MuiButton, MuiInputField} from 'Components/MUI';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import PopupMessage from 'Components/PopupMessage';
import styles from './styles.module.scss';

const ProjectTableEdit = ({setProject, project, newObjLine, inputField, newKey, headTitles, title, list=[{}]}) => {
    const [formInputs, setFormInputs] = useState();
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
        const newObj = {
            ...item,
            [e.target.name]: (e.target.type === 'checkbox' && e.target.checked) || e.target.value
        }
        const updateList = list.map(list => list.id === item.id ? newObj : list);
        setFormInputs(updateList)
    };

    const onClickAddLine = () => {
        setFormInputs(formInputs.concat(newObjLine))
    }
    const onClickRemoveLine = (id) => {
        setFormInputs(formInputs.filter(item => item.id !== id))
    }

    return(
        <div className="ProjectTableWrapper">
            {showMessage
             ? <PopupMessage 
                newKey={newKey}
                setShowMessage={setShowMessage}
                formInputChange={formInputChange}
                viewItem={viewItem}/>
             : <>
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
                                                 }}>View</button>
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
             <div className={styles.FlexWrap}>
                     <AddCircle color="success" onClick={onClickAddLine}/>
             </div>
             </>
            }
            
        </div>
    );
};

export default ProjectTableEdit;