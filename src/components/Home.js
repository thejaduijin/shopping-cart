import React from 'react'
import { CartState } from './Context/Context'

const Home = () => {

  const { state: { products } } = CartState();
  console.log(products);

  return (
    <div className='home'>
    {/* {  <Filters/>} */}
    <div className='productContainer'>
      {
        products.map((prod)=>{
          return <span>{prod.name}</span>
        })
      }

    </div>
    </div>
  )
}

export default Home
