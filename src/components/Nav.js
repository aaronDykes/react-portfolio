import './../css/Header.css'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='leftHeader'>
      <div className='dropdown'>
        <Link to='/' id='dropBtn'>
          menu
        </Link>
        <div className='dropdown-content'>
          <nav>
            <ul id='navList'>
              {/* <li className='dropLinks'>
                <Link to='/Physics'>Physics</Link>
              </li> */}
              <li className='dropLinks'>
                <Link to='/Pattern'>Pattern</Link>
              </li>
              <li className='dropLinks'>
                <Link to='/Gallery'>Gallery</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
