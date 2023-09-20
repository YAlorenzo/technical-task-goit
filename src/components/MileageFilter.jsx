
import { Slider } from '@mui/material';
import PropTypes from 'prop-types';

function MileageFilter({ value, onChange }) {

  const handleChangeRage = (event, newValue) => {
    onChange(newValue);
    };
    return (
        <div className='w-full sm:w-[300px]'>
             <p className='text-sm text-gray_text mb-4'>Сar mileage / km</p>
             <Slider 
        value={value}
        onChange={handleChangeRage}
        valueLabelDisplay="auto" 
        min={1000} 
        max={20000} 
        step={100} 
        aria-labelledby="car-mileage-slider"
      />
      </div>
     
  )
}

MileageFilter.propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func
}
export default MileageFilter