import '../css/Footer.css'

function LeftDescription () {
  return (
    <div className='LeftContact'>
      <dl className='LeftStudent'>
        <dt>Email:</dt>
        <dd className='LeftData'>aaron.dykes99@gmail.com</dd>
        <br />
        <dt>Phone:</dt>
        <dd className='LeftData'>(613) 447-7909</dd>
      </dl>
    </div>
  )
}
function RightDescription () {
  return (
    <div className='RightContact'>
      <dl className='RightStudent'>
        <dt>Check out the code</dt>
        <dd className='RightData'>
          <a
            href='https://github.com/aaronDykes/react-portfolio'
            target='_blank'
            rel='noreferrer'
          >
            Code
          </a>
        </dd>
        <br />
        <dt>Add me on LinkedIn</dt>
        <dd className='RightData'>
          <a
            href='
            https://www.linkedin.com/in/aaron-dykes-691524216/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </dd>
      </dl>
    </div>
  )
}
export default function Footer () {
  return (
    <div className='Footer'>
      <LeftDescription />
      <RightDescription />
    </div>
  )
}
