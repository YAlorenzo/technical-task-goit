import { useDispatch, useSelector } from "react-redux";
import { selectAllAdverts, selectCurentPage, selectIsFilter } from "../../redux/selectors";
import { incrementPage } from "../../redux/advertsSlice";

import { fetchAdverts } from "../../redux/advertsOperation";
import AdvertsListItem from "../AdvertsListItem";



function AdvertsList() {
  const dispatch = useDispatch();
  const page = useSelector(selectCurentPage);  
  const adverts = useSelector(selectAllAdverts);
  const isFilter = useSelector(selectIsFilter);
    
  const handleLoadMoreClick = () => {
    dispatch(incrementPage());
    dispatch(fetchAdverts(page));
    };
  return (
    <section>
        <div className="fix-container">
            <ul className="flex flex-wrap gap-7 justify-center"> 
                {adverts.map((elem) => (
                  <AdvertsListItem elem={elem} key={elem.id} />
                ))}   
        </ul>  
        {page < 6 && !isFilter && (
           <button onClick={handleLoadMoreClick} className="flex mt-[100px] text-base font-medium text-blue underline mx-auto
               hover:text-active_blue transition-colors">Load More</button>
        ) }
             
        </div>  
    </section>
  )
}

export default AdvertsList