import '../css/Gallery.css'
import Images from './../images/PhotoIndex'

import { Link } from 'react-router-dom'
import { BiAlignLeft } from 'react-icons/bi'

export default function Gallery () {
  return (
    <div className='Gallery'>
      <div className='Menu'>
        <Link to='/' id='Head'>
          <BiAlignLeft />
        </Link>
      </div>

      <div className='Top-Content'>
        {Object.keys(Images).map(el => {
          return (
            <div className='Images'>
              <img src={Images[el]} alt={el} className='Image'></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}
