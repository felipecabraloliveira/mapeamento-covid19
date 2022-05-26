import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'


const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {    
    background: linear-gradient(rgba(255, 255, 255, .60), rgba(255, 150, 0, .10)), url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }
  footer{
    position: relative;
    background: linear-gradient(rgba(60, 60, 60, .95), rgba(30, 20, 30, .90));
    width: 100%;
    text-align: center;
    color: white;     
    padding-top: 5px;
    padding-bottom: 5px  
  }
  footer a{
    color: white;
    font-wheigt: 900;
  }
`

export default globalStyle
