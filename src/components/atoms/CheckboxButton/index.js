import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const CheckboxButton = ({
    label
}) => {
    const [checked, setChecked] = useState(true);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            }
            label={label}
        />
        
    )
}

export default CheckboxButton
