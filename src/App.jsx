import './App.css'
import { Counter } from './features/counter/Counter'
import logo from './logo.svg'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <p>Edit <code>src/App.jsx</code> and save to reload</p>
        <Counter />
        <span>
          <span>Learn </span>
          <a 
            className='App-link'
            href="https://reactjs.org"
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span> and </span>
          <a
           className='App-link'
           href="https://redux.js.org/tutorials/essentials/part-2-app-structure"
           target='_blank'
           rel='noopener noreferrer'
           >
            Redux
           </a>
        </span>
      </header>
    </div>
  )
}

export default App