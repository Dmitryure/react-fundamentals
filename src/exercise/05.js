// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const Box = (props) => {
  console.log(props)
return <div className={props.className} style={{ ...props.style, fontSize: "italic" }}>{props.children}</div>
}
const smallBox = <Box style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }} className={"box box--small"} >small lightblue box</Box>
const mediumBox = <Box style={{ backgroundColor: 'pink', fontStyle: 'italic' }} className={"box box--medium"} >medium pink box</Box>
const largeBox = <Box style={{ backgroundColor: 'orange', fontStyle: 'italic' }} className={"box box--large"} >large orange box</Box>


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
