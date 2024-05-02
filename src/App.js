import React from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


const App = () => {
  let pg=12
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={pg} country='in' category='general'/>} ></Route>
          <Route exact path='/business' element={<News key="business" pageSize={pg} country='in' category='business'/>} ></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pg} country='in' category='entertainment'/>} ></Route>
          <Route exact path='/health' element={<News key="health" pageSize={pg} country='in' category='health'/>} ></Route>
          <Route exact path='/science' element={<News key="science" pageSize={pg} country='in' category='science'/>} ></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={pg} country='in' category='sports'/>} ></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={pg} country='in' category='technology'/>} ></Route>
        </Routes>
      </Router>
    </>

  )
}

export default App


