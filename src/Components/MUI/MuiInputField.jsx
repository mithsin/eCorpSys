import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useInputStyles } from './styles';
// import MomentUtils from '@date-io/moment';
// import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Checkbox from '@mui/material/Checkbox';

const MuiInputField = ({
  props, 
  defaultValue,
  required,
  type,
  name, 
  label, 
  onChange,
  onKeyPress
}) => {
    const [value, setValue] = React.useState(new Date());
    const classes = useInputStyles(props);
    return (
      <>
      {(type === "date") && 
      <DesktopDatePicker
          label={label}
          value={defaultValue}
          name={name}
          minDate={new Date('2017-01-01')}
          onChange={e => onChange({type, name, value: e})}
          renderInput={(params) => <TextField {...params} />}
        />}
      
      {(type === "text") && <TextField
        className={classes.inputStyle}
        label={label}
        {...{required: required}}
        type={type? type : 'text'}
        name={name}
        variant="outlined"
        onChange={onChange}
        { ...defaultValue && {defaultValue: defaultValue}}
        { ...onKeyPress && {onKeyPress: onKeyPress}}
        // InputProps={{ classes, disableunderline: "true" }} 
        />
    }
    {(type === 'checkbox') && 
      <Checkbox
        name={name}
        label={label}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...defaultValue && {defaultChecked: true}} />}
    </>
)};

export default MuiInputField;