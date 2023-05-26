import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2 className="text-2xl">
      <Link to="/keystroke">Key Stroke Demo</Link>
      </h2>
      
    </>
  )
}

export default App
