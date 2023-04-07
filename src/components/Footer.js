import '../css/Footer.css'

function LeftDescription () {
  return (
    <div className='LeftContact'>
      <dl className='LeftStudent'>
        <dt>email</dt>
        <dd className='LeftData'>aaron.dykes99@gmail.com</dd>
        <br />
        <dt>phone</dt>
        <dd className='LeftData'>613-447-7909</dd>
      </dl>
    </div>
  )
}
function RightDescription () {
  return (
    <div className='RightContact'>
      <dl className='RightStudent'>
        <dt>source</dt>
        <dd className='RightData'>
          <a
            href='https://github.com/aaronDykes/react-portfolio/tree/reactBranch'
            target='_blank'
            rel='noreferrer'
          >
            code
          </a>
        </dd>
        <br />
        <dt>linkedin</dt>
        <dd className='RightData'>
          <a
            href='https://www.linkedin.com/in/aaron-dykes-691524216/'
            target='_blank'
            rel='noreferrer'
          >
            link
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
