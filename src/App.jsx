import React from 'react'
import Navbar from './Components/navbar'
import Card from './Components/card'
import Solar from './Components/solar'
import Manual from './Components/manual'
import Daylight from './Components/dayLight'
function App() {
  return <>
  <Navbar />
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <Card />
        </div>
        <div className="col-md-3">
          <Solar />
          </div>
          <div className="col-md-3">
            <Manual />
          </div>
          <div className="col-md-3">
            <Daylight />
          </div>
      </div>
    </div>

</>
}

export default App