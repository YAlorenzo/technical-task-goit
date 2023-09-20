import { useDispatch } from "react-redux";
import CarsBrandFilter from "../CarsBrandFilter"
import CarsPriceFilter from "../CarsPriceFilter"
import MileageFilter from "../MileageFilter"

import { useState } from "react";
import { fetchFilterAdverts } from "../../redux/advertsOperation";


function Filters() {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState([0, 20000]);
  const dispatch = useDispatch();

  const handelFilter = () => {
   const serachParams =  {
      brand,
      price,
      mileage,
    }
    dispatch(fetchFilterAdverts(serachParams))
    console.log(serachParams);
  }
  return (
    <section className='section_margin'>
      <div className="fix-container flex-wrap justify-center flex">
        <div className="flex items-baseline flex-wrap gap-5 justify-center">
            <CarsBrandFilter value={brand} onChange={setBrand} />
            <CarsPriceFilter value={price} onChange={setPrice}/>
            <MileageFilter value={mileage} onChange={setMileage}/>
        </div>    
        <button type="button" onClick={handelFilter} className="bg-blue flex justify-center 
          items-center py-[14px] px-11 h-max self-end md:mt-4 lg:mt-0 lg:ml-12 text-white text-sm font-semibold rounded-xl">Search</button>
        </div>  
    </section>
  )
}

export default Filters