import React, { ReactNode, FC, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { SpinnerContainer } from './Spinner'


const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &.google-sign-in {
        background-color: #4285f4;
        color: white;

        &:hover {
        background-color: #357ae8;
        border: none;
        }
    }

    &.inverted {
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover {
        background-color: black;
        color: white;
        border: none;
        }
    }
`
const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
type BtnTypes = {
  "google" : string,
  "inverted" : string,
  "default" : string,
}

const ButtonTypes: BtnTypes = {
    "google" : "google-sign-in",
    "inverted" : "inverted",
    "default" : ""
}
type ButtonProps = {
  children?: ReactNode,
  buttonType: string, 
  isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Btn: FC<ButtonProps> = ({ children, buttonType, isLoading, ...other }: ButtonProps) => {
  return (
    <Button 
        disabled={isLoading}
        className={`button-container ${ButtonTypes[buttonType as keyof typeof ButtonTypes]}`} 
        {...other}
    >
        {isLoading ? <ButtonSpinner/> : children}
    </Button>
  )
}



export default Btn