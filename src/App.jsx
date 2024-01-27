import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import cardsData from "./data.jsx"

const cards = cardsData.map(item => {
  return (

    <Card 
      key={item.id}
      title={item.title}
      location={item.location}
      googleMapsURL={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  )
})

console.log(cards)

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <Navbar />
      <section className='cards-wrapper'>
        {cards}
      </section>
    </>
  )
}

export default App
