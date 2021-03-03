// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'
/*
.box {
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.box--large {
  width: 270px;
  height: 270px;
}
.box--medium {
  width: 180px;
  height: 180px;
}
.box--small {
  width: 90px;
  height: 90px;
}
*/

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

const Box = ({children, backgroundColor, size}) => (
  <div
    className={`box box--${size}`}
    style={{backgroundColor, fontStyle: 'italic'}}
  >
    {children}
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" backgroundColor="lightblue">
        small lightblue box
      </Box>
      <Box size="medium" backgroundColor="pink">
        medium pink box
      </Box>
      <Box size="large" backgroundColor="orange">
        large orange box
      </Box>
    </div>
  )
}

export default App
