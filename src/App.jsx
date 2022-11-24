import { useState } from 'react'
import { Navbar, Header, Footer} from './containers/index'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
  )
}

export default App
