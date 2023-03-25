import Footer from '../components/Footer'
import Header from '../components/Header'
import HeightStore from '../stores/HeightStore'

import '../css/Pattern.css'

function printTriangle (height) {
  if (height >= 12) height = 12
  if (height <= 0 || isNaN(height)) return

  let result = '*\n'
  let ast = '*'

  while (--height) {
    ast += ' *'
    result += ast + '\n'
  }

  const newText = result.split('\n').map(str => <p>{str}</p>)
  return <div>{newText}</div>
}

function printDiamond (height) {
  if (height >= 12) height = 12
  if (height <= 0 || isNaN(height)) return

  let count = height
  let ast = '*'
  let result = '*<br>'

  while (--height) {
    ast += ' *'
    result += ast + '<br>'
  }

  while (count--) {
    ast = ast.substring(0, count + count - 1)
    result += ast + '<br>'
  }

  const final = result.split('<br>').map(str => <p>{str}</p>)
  return <div>{final}</div>
}

function printRect (height) {
  if (height >= 12) height = 12
  if (height <= 0 || isNaN(height)) return

  let top = '*'

  for (let i = 0; i < height - 2; i++) top += '  *'

  top += '  *\n'
  let result = top

  for (let i = 0; i < height - 2; i++) result += top

  result += top
  const final = result.split('\n').map(str => <p>{str}</p>)
  return <div>{final}</div>
}

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

function getStore (str) {
  switch (str) {
    case 'rect':
      return HeightStore(s => {
        return {
          rectHeight: s.rectHeight,
          setRectHeight: s.setRectHeight
        }
      })
    case 'tri':
      return HeightStore(s => {
        return {
          triHeight: s.triHeight,
          setTriHeight: s.setTriHeight
        }
      })
    case 'di':
      return HeightStore(s => {
        return {
          diHeight: s.diHeight,
          setDiHeight: s.setDiHeight
        }
      })
    default:
      return
  }
}

function Triangle () {
  const store = getStore('tri')
  return (
    <div className='Triangle'>
      <div>
        <h2>Print a triangle</h2>
        <br />
        <input
          className='Inp'
          name='height'
          onChange={store.setTriHeight}
          value={store.triHeight}
          placeholder='Enter an integer'
        />
      </div>
      <div className='Pat'>
        {store.triHeight && printTriangle(store.triHeight)}
      </div>
    </div>
  )
}

function Rectangle () {
  const store = getStore('rect')
  return (
    <div className='Rectangle'>
      <div>
        <h2>Print a Rectangle</h2>
        <br />
        <input
          className='Inp'
          name='rectHeight'
          onChange={store.setRectHeight}
          value={store.rectHeight}
          placeholder='Enter an integer'
        />
      </div>
      <div className='Pat'>
        {store.rectHeight && printRect(store.rectHeight)}
      </div>
    </div>
  )
}

function Diamond () {
  const store = getStore('di')
  return (
    <div className='Diamond'>
      <div>
        <h2>Print a Diamond</h2>
        <br />
        <input
          className='Inp'
          name='diHeight'
          onChange={store.setDiHeight}
          value={store.diHeight}
          placeholder='Enter an integer'
        />
      </div>
      <div className='Pat'>
        {store.diHeight && printDiamond(store.diHeight)}
      </div>
    </div>
  )
}

export default function Pattern () {
  return (
    <div className='Pattern-Container'>
      <Header />
      <div className='Pattern'>
        <Triangle />
        <Rectangle />
        <Diamond />
      </div>
      <Footer />
    </div>
  )
}
