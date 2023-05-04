import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, changeState } from './app/reducers/counter/counterSlice'
import List from './pages/List'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <NavLink
          to="/list">
          List
      </NavLink>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <input type="number" onChange={(event) => dispatch(changeState(event.target.value))}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/list" element={<List />} />
      </Routes>
    </>
  )
}

export default App
