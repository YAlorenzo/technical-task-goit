import { brandsCars } from '../constants';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';

function CarsBrandFilter({ value, onChange }) {
   const handleChange = (event) => {
      onChange(event.target.value);
    };
    return (
        <div className='w-full sm:w-[270px]'>
             <p className='text-sm text-gray_text mb-4'>Car brand</p>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Brand"
            onChange={handleChange}
        > 
            {brandsCars.map((elem) => (
                <MenuItem value={elem.value} key={elem.make}>{elem.make}</MenuItem>
            ))}  
        </Select>
    </FormControl>
        </div>
      
  )
}

CarsBrandFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default CarsBrandFilter