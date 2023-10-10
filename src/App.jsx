
import './style/App.scss';
import Box from './Components/Box/Box';


const rates = [
  {
    price: 300,
    speed: 10,
    color: 'aqua'
  },
  {
    price: 450,
    speed: 50,
    color: 'green'
  },
  {
    price: 550,
    speed: 100,
    color: 'red'
  },
  {
    price: 1000,
    speed: 200,
    color: 'grey'
  }
]

function App() {

  return (
    <div className="App">
        <h1>Наши тарифы</h1>
        <div className="line-container">
            <Box price = {rates[0].price} speed = {rates[0].speed} color ={rates[0].color}/>
            <Box price = {rates[1].price} speed = {rates[1].speed} color ={rates[1].color}/>
            <Box price = {rates[2].price} speed = {rates[2].speed} color ={rates[2].color}/>
            <Box price = {rates[3].price} speed = {rates[3].speed} color ={rates[3].color}/>
        </div>
    </div>
  );
}

export default App;
