import logo from './logo.svg'

function App() {
  const onClick = () => {
    document.title = 'Teste'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => onClick}>
          Teste
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn React
        </a>
      </header>
    </div>
  )
}

export default App
