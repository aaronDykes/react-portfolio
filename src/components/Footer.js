import '../css/Footer.css'

function LeftDescription () {
  return (
    <div className='LeftContact'>
      <dl className='Student'>
        <dt>Email:</dt>
        <dd>aaron.dykes99@gmail.com</dd>
        <br />
        <dt>Phone:</dt>
        <dd>(613) 447-7909</dd>
      </dl>
    </div>
  )
}
export default function Footer () {
  return (
    <div className='Footer'>
      <LeftDescription />
    </div>
  )
}
