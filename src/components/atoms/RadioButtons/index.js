import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtons = ({
    data,
    defaultValue
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        {data.map((item) => (
            <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                labelPlacement="end"
            />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons