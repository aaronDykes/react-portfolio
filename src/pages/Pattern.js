import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState } from 'react'

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
  let result = ''

  for (let i = 0; i < height - 2; i++) top += '  *'

  top += '  *\n'
  result += top

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

function Triangle () {
  const [triangleHeight, setTriangleHeight] = useState('')
  const handleTriChange = e => {
    setTriangleHeight(e.target.value)
  }
  return (
    <div className='Triangle'>
      <div>
        <h2>Print a triangle</h2>
        <br />
        <input
          className='Inp'
          name='triangleheight'
          onChange={handleTriChange}
          value={triangleHeight}
          placeholder='Enter an integer'
        />
      </div>
      <div className='Pat'>
        {triangleHeight && printTriangle(triangleHeight)}
      </div>
    </div>
  )
}

function Rectangle () {
  const [rectHeight, setRectHeight] = useState('')
  const handleRectChange = e => {
    setRectHeight(e.target.value)
  }
  return (
    <div className='Rectangle'>
      <div>
        <h2>Print a Rectangle</h2>
        <br />
        <input
          className='Inp'
          name='rectHeight'
          onChange={handleRectChange}
          value={rectHeight}
          placeholder='Enter an integer'
        />
      </div>
      <div className='Pat'>{rectHeight && printRect(rectHeight)}</div>
    </div>
  )
}

function Diamond () {
  const [diHeight, setDiHeight] = useState('')
  const handleDiChange = e => {
    setDiHeight(e.target.value)
  }
  return (
    <div className='Diamond'>
      <div>
        <h2>Print a Diamond</h2>
        <br />

        <input
          className='Inp'
          name='diHeight'
          onChange={handleDiChange}
          value={diHeight}
          placeholder='Enter an integer'
        />
      </div>
      <div className='Pat'>{diHeight && printDiamond(diHeight)}</div>
    </div>
  )
}

export default function Pattern () {
  return (
    <div>
      <Header />
      <div className='Pattern'>
        <Triangle />
        <Rectangle />
        <Diamond />
      </div>

      {/* <div className='Fib'></div>*/}
      <Footer />
    </div>
  )
}
