import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    margin: 1rem;
`
export const Title = styled.h1`
margin-left: 250px;
font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 43px;
display: flex;
align-items: center;

color: #000000;
`

export const Card = styled.div`
margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;

    border-bottom: 1px solid #C4C4C4

`
export const Button = styled.a`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
margin: 19px 250px 0;
width: 108px;
height: 36px;
  font-weight: 400;
  line-height: 1.5;
//   text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  color: #fff;
    background-color: #512DA8;
    border-color: #512DA8;
    padding: 10px 0.75rem 2px;
    // font-size: 1rem;
    border-radius: 3px;
  
`

export const AlertCard = styled.div`
// position: absolute;
width: 80%;
margin: 20px auto;
padding: .5rem;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 4px;
`
export const Icons = styled.span`

  padding-top: 2px;
  margin: 10px;
`
export const TitleMessage = styled.div`
width: 450;
textAlign: "left";
`

export const DaysMessage = styled.div`
width: 150;
`
export const IconMessage = styled.div`
width: 250;
`