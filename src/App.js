import logo from './logo.svg';
import './App.css';
import {useQuery} from "@apollo/client";
import {GET_MISSIONS } from "./graphql/missions"


function App() {
  const { loading, error, data } = useQuery(GET_MISSIONS);
  console.log(data);
  return (
    <div className="App">

    </div>
  );
}

export default App;