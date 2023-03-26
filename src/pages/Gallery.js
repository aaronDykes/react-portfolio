import '../css/Gallery.css'
import { Red, Alc, SanFran, Tor, Bluffs, Ontario } from '../assets/PhotoIndex'

import { Link } from 'react-router-dom'

export default function Gallery () {
  return (
    <div className='Gallery'>
      <div className='Image'>
        <Link to='/' id='Head'>
          Home
        </Link>
      </div>

      <div className='Top-Content'>
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
      <div className='Bottom-Content'>
        <div className='Toronto'>
          <img id='Tor' src={Tor} alt='Tor' />
        </div>
        <div className='Ontario'>
          <img id='Ont' src={Ontario} alt='Ontario' />
        </div>
        <div className='Bluffs'>
          <img id='Bluf' src={Bluffs} alt='Bluf' />
        </div>
      </div>
    </div>
  )
}
