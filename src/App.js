import logo from './logo.svg';
import './App.css';
import useStore from './store.js'


const App = () => {
  const { bears, increasePopulation, removeAllBears } = useStore(state => state)
  
  return (
    <>
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove all</button>
    </>
  )
}

export default App
