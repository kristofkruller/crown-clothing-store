import React from 'react'
import styled from 'styled-components'
import ShopData from "../assets/shop-data.json"

const ShopWrap = styled.section`

`

const Shop = () => {

  console.log(ShopData[0].name)
  return (
    <>
      {ShopData.map(({  id, name  }) => (

        <div key={id}>
          <h1>{name}</h1>
        </div>
      
      
      ))}
    </>
  )
}

export default Shop