import '../css/Gallery.css'
import {
  Red,
  Alc,
  SanSky,
  SanFran,
  SanSun,
  Tor,
  Bluffs
} from '../assets/PhotoIndex'

import { Link } from 'react-router-dom'

export default function Gallery () {
  return (
    <div className='Gallery'>
      <div className='Image'>
        <Link to='/' id='Head'>
          Home
        </Link>
      </div>
      <div className='Content'>
        <div className='Alcatraz'>
          <img id='Alc' src={Alc} alt='Alc' />
        </div>
        <div className='Redwood'>
          <img id='Red' src={Red} alt='Red' />
        </div>
        <div className='Fransisco'>
          <img id='Fran' src={SanFran} alt='SanFran' />
        </div>
      </div>
    </div>
  )
}
