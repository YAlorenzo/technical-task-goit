import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorits, removeFavorits } from '../redux/advertsSlice';
import { selectFavorits } from '../redux/selectors';
import Modal from './Modal';

import { useState } from 'react';
function AdvertsListItem({ elem }) {
  const favorits = useSelector(selectFavorits);
  const dispatch = useDispatch();  
  const [isActiveModal, setIsActiveModal] = useState(false);
  const isFavorite = favorits.some((favorite) => favorite.id === elem.id);
    
  const parseAddress = (address) => {
    const addressParts = address.split(',').map(part => part.trim());
    const city = addressParts[1];
    const country = addressParts[2];
  
     return { city, country };
  }
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } 
  const handleFavoritClick = (elem) => {
    if (isFavorite) {
      dispatch(removeFavorits(elem.id));
    }
    else {
      dispatch(addFavorits(elem));
    }
  }
  const openModal = () => {
    setIsActiveModal(true);
  }
  const closeModal = () => {
    setIsActiveModal(false);
  }
  return (
    <>
        <li key={elem.id} className="w-[274px] mt-[50px]">
        <div className="h-[267px] relative">
          <img src={elem.img} alt={elem.model} className="w-full h-full object-cover rounded-[14px]" />
        {isFavorite ?
          (
            <FavoriteIcon onClick={() => handleFavoritClick(elem)}
              className="absolute  top-[14px] right-[14px] text-blue cursor-pointer" />
          )
          :
          (<FavoriteBorderIcon onClick={() => handleFavoritClick(elem)} className="absolute  top-[14px] right-[14px] text-white cursor-pointer" />
          )}                                         
            </div>
              <div className="flex justify-between items-center text-base mt-[14px] font-medium text-[#121417]">
                <p className="flex">
                                {elem.make}
                                <span className="text-blue truncate w-14 block ml-1"> {elem.model}, </span>
                                {elem.year}
                            </p>
                            <p>{elem.rentalPrice}</p>
                        </div>
                        <div className="flex flex-wrap text-xs text-[#121417] opacity-[0.50] mt-2">
                            <p className="car_info_margin">{parseAddress(elem.address).city}</p>|
                            <p className="car_info_margin">{parseAddress(elem.address).country}</p>|
                            <p className="car_info_margin">{elem.rentalCompany}</p>|
                            <p className="car_info_margin">{elem.type}</p>|
                            <p className="car_info_margin">{elem.model}</p>|
                            <p className="car_info_margin">{formatNumberWithCommas(elem.mileage)}</p>|
                            <p className="car_info_margin">{elem.engineSize}</p>
                        </div>
                        <button type="button" onClick={openModal} className="flex justify-center items-center w-full 
                        mt-7 py-3 rounded-xl bg-blue 
                         text-white hover:bg-active_blue transition-colors">
                             Learn more
                        </button>
      </li>

      <Modal isActive={isActiveModal} closeModal={closeModal}>
        <div className='max-w-[470px] max-h-[700px] overflow-y-auto relative rounded-3xl p-5 bg-white'>
          <img src={elem.img} alt="photo" className='w-full max-h object-cover rounded-[14px]' />
          <h3 className='mt-[14px]'>{elem.make} <span className='text-blue'>{elem.model}</span>, {elem.year}</h3>
           <div className="flex flex-wrap text-xs text-[#121417] opacity-[0.50] mt-2">
              <p className="car_info_margin">{parseAddress(elem.address).city}</p>|
              <p className="car_info_margin">{parseAddress(elem.address).country}</p>|
              <p className="car_info_margin">Id: {elem.id}</p>|
              <p className="car_info_margin">Year: {elem.year}</p>|
              <p className="car_info_margin">{elem.rentalCompany}</p>|
              <p className="car_info_margin">Type: {elem.type}</p>|
              <p className="car_info_margin">Fuel Consumption: {elem.fuelConsumption}</p>|
              <p className="car_info_margin">Engine Size: {elem.engineSize}</p>
          </div>
          <p className='text-sm font-normal text-[#121417] mt-3 '>{elem.description}</p>

          <p className='text-sm font-medium text-[#121417] mt-3'>Accessories and functionalities:</p>
          <div className='text-xs flex flex-col font-normal text-gray_text'>
            <ul className='flex flex-wrap'>
              {elem.accessories.map((elem) => (
                <li key={elem} className='mx-1'>
                  {elem} |
                </li> 
              ))}
            </ul>
             <ul className='flex flex-wrap'>
              {elem.functionalities.map((elem) => (
                <li key={elem} className='mx-1'>
                  {elem} |
                </li> 
              ))}
            </ul>
          </div>
          <p className='text-sm font-medium text-[#121417] mt-3'>Rental Conditions: </p>
          <div className='flex'>
            <ul className='flex flex-wrap gap-1'>
              <li className='text-black_gray text-xs 
              font-normal py-[7px] px-[14px] bg-[#F9F9F9] rounded-[14px]'>Minimum age : <span className='text-blue'>25</span></li>
              <li className='text-black_gray text-xs 
              font-normal py-[7px] px-[14px] bg-[#F9F9F9] rounded-[14px]'>Valid driver’s license</li>
              <li className='text-black_gray text-xs 
              font-normal py-[7px] px-[14px] bg-[#F9F9F9] rounded-[14px]'>Security deposite required </li>
              <li className='text-black_gray text-xs 
              font-normal py-[7px] px-[14px] bg-[#F9F9F9] rounded-[14px]'>Mileage: <span className='text-blue'>{formatNumberWithCommas(elem.mileage)}</span></li>
              <li className='text-black_gray text-xs 
               font-normal py-[7px] px-[14px] bg-[#F9F9F9] rounded-[14px]'>Price : <span className='text-blue'>{elem.rentalPrice}</span></li>
            </ul>
          </div>
          <a href="tel:+380730000000" className='inline-block mt-4 py-3 px-[50px] 
          text-white rounded-xl  text-sm font-semibold bg-blue transition-colors hover:bg-active_blue'>
             Rental car
          </a>
          <ClearIcon className='absolute top-1 right-1 cursor-pointer' onClick={closeModal} />
        </div>
      </Modal>
    </>
    
  )
}

AdvertsListItem.propTypes = {
  elem: PropTypes.object
};
export default AdvertsListItem