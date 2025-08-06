import { useEffect, useState } from 'react'
import bgImg from "./assets/bg-cafe-lg.jpg"
import './App.css'
import Collection from './components/Collection'
import Button from './components/button/Button'
import axios from 'axios';

function App() {
  const [coffeeData, setCoffeeData] = useState([]);

  console.log(coffeeData)
  useEffect(() => {
    axios.get(
      'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
    )
      .then((res) => {
        setCoffeeData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <div className='main-content'>
      <img src={bgImg} alt="backGround image" />
      <div className='box'>
        <div className='box-note'>
          <h1>Our Collection</h1>
          <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className='buttons'>
            <Button text="All Products" selected/>
            <Button text="Available Now"  />
          </div>
        </div>
        <div className='coffeeData'>
          {coffeeData.map(item => (
            <Collection item={item} key={item.id} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
