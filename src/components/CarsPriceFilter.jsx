import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { pricesCars } from '../constants';
import PropTypes from 'prop-types';

function CarsPriceFilter({ value, onChange}) {
     const handleChange = (event) => {
      onChange(event.target.value);
    };
    return (
        <div>
             <p className='text-sm text-gray_text mb-4'>Price / 1 hour</p>
               <FormControl className='w-[125px]'>
                <InputLabel id="demo-simple-select-label">To $</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="To$"
                onChange={handleChange}
                  > 
                      {pricesCars.map((elem) => (
                          <MenuItem value={elem.price} key={elem.price}>{elem.price}</MenuItem>
                      ))}  
                
              
               </Select>
              </FormControl>
      </div>
  
  )
}
CarsPriceFilter.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func
}
export default CarsPriceFilter