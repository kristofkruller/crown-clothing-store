import React from 'react'
import Data from '../assets/categories.json'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CategoriesWrapper = styled.section`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`
const CategoryContainer = styled(Link)`

--t-basic: all .275s ease-in-out;

        min-width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 0 7.5px 15px;
        overflow: hidden;
    
        &:hover {
            cursor: pointer;
            
            & .background-image {
                transform: scale(1.1);
                transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            }
        
            & .category-body-container {
                opacity: 0.9;
                transition: var(--t-basic);
            }
        }
        
        &.large {
            height: 380px;
        }
        
        &:first-child {
            margin-right: 7.5px;
        }
        
        &:last-child {
            margin-left: 7.5px;
        }
        
        .background-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: var(--t-basic);

        }
        
        .category-body-container {
            height: 90px;
            padding: 0 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            background-color: white;
            opacity: 0.7;
            position: absolute;
            transition: var(--t-basic);

            h2 {
                font-weight: bold;
                margin: 0 6px 0;
                font-size: 22px;
                color: #4a4a4a;
            }
        
            p {
                font-weight: lighter;
                font-size: 16px;
            }
        }

`
const Categories = () => {

  return (

    <CategoriesWrapper className='categories-container'>
      {Data.map(({id, title, imageUrl, route}) => (
        <CategoryContainer key={id} className='category-container' to={route}>
          <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
          }} />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </CategoryContainer>
      ))}     
    </CategoriesWrapper>

  )
}

export default Categories