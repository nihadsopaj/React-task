import logo from './logo.svg';
import './App.css';
import {useQuery} from "@apollo/client";
import {GET_MISSIONS } from "./graphql/missions"


function App() {
  const { loading, error, data } = useQuery(GET_MISSIONS);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> Nihad Sopajjjj</h1>
      </header>
    </div>
  );
}

export default App;
