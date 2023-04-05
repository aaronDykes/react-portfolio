import Footer from '../components/Footer'
import Header from '../components/Header'
import Triangle from '../components/Triangle'
import Rectangle from '../components/Rectangle'
import Diamond from '../components/Diamond'

import '../css/Pattern.css'

// function fibonacci (n) {
//   const [size, setSize] = useState('')

//   let fib = [0, 1]

//   let result = ''
//   let child = document.createElement('li')

//   for (let i = 1; i <= n; i++) {
//     fib.push(fib[i] + fib[i - 1])
//     result[i] += '<li>' + fib[i] + '</li>'
//     if (i % 4 == 0) result[i] += '\n'
//   }
//   let mid = result.split('<li>').map(str => {
//     '<li>' + str + '</li>'
//   })
//   const final = mid.split('\n').map(str => <p>{str} </p>)
// }

export default function Pattern () {
  return (
    <div className='Pattern-Container'>
      <Header />
      <div className='Pattern'>
        <div className='Triangle'>
          <Triangle />
        </div>
        <div className='Diamond'>
          <Diamond />
        </div>
        <div className='Rectangle'>
          <Rectangle />
        </div>
      </div>
      <Footer />
    </div>
  )
}
