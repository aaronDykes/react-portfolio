import '../css/Gallery.css'
import Images from './../images/PhotoIndex'

import { Link } from 'react-router-dom'

export default function Gallery () {
  let arr = []
  let count = 0
  for (var key of Object.keys(Images)) {
    arr[count++] = Images[key]
  }
  return (
    <div className='Gallery'>
      <div className='Menu'>
        <Link to='/' id='Head'>
          menu
        </Link>
      </div>

      <div className='Top-Content'>
        {arr.map(el => {
          return (
            <div className='Images'>
              <img src={el} alt={el} className='Image'></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}
