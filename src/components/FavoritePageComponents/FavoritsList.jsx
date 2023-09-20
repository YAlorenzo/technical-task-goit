import { useSelector } from 'react-redux'
import { selectFavorits } from '../../redux/selectors'
import AdvertsListItem from '../AdvertsListItem';
import { Typography } from '@mui/material';

function FavoritsList() {
    const favorits = useSelector(selectFavorits);
  return (
    <section>
          <div className="fix-container">
              {favorits.length !== 0 ? (
                   <ul className="flex flex-wrap gap-7 justify-center">
                     {favorits.map((elem) => (
                     <AdvertsListItem elem={elem} key={elem.id} /> 
                    ))} 
                   </ul>
                )
                :
                (
                   <Typography>No favorite content available.</Typography>
                )
            }
             
        </div>
    </section>
  )
}

export default FavoritsList