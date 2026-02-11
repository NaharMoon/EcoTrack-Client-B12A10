import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// // imageBB links
// <img src="https://i.ibb.co.com/4RwjrJ8M/card-img1.jpg" alt="card img1" border="0">
// <img src="https://i.ibb.co.com/Wv7fS5wW/card-img2.jpg" alt="card img2" border="0">
// <img src="https://i.ibb.co.com/hQvHjPk/card-img3.png" alt="card img3" border="0">
// <img src="https://i.ibb.co.com/5WnyptLj/card-img4.jpg" alt="card img4" border="0">
// <img src="https://i.ibb.co.com/YGYWtRS/card-img5.jpg" alt="card img5" border="0">
// <img src="https://i.ibb.co.com/sp19SR1v/card-img6.jpg" alt="card img6" border="0"></img>


// <img src="https://i.ibb.co.com/mFCvQrwR/carousal1.jpg" alt="carousal1" border="0">
// <img src="https://i.ibb.co.com/szRKWjh/carousal2.jpg" alt="carousal2" border="0">
// <img src="https://i.ibb.co.com/R8qFvfx/carousal3.jpg" alt="carousal3" border="0"></img>
// <img src="https://i.ibb.co.com/gZ2VpGYR/carousal4.jpg" alt="carousal4" border="0">
// <img src="https://i.ibb.co.com/h1d3CDTX/carousal5.jpg" alt="carousal5" border="0">