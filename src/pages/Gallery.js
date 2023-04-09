import '../css/Gallery.css';
import Images from './../images/PhotoIndex';

import {Link} from 'react-router-dom';

export default function Gallery()
{

  return (
    <div className='Gallery'>
      <div className='Menu'>
        <Link to='/' id='Head'>
          menu
        </Link>
      </div>

      <div className='Top-Content'>
        {Object.keys(Images).map(el =>
        {
          return (
            <div className='Images'>
              <img src={Images[el]} alt={el} className='Image'></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
