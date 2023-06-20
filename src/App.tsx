import React from "react";
import "./app.css";
import Image from "./assets/pngaaa.com-2507896.png";
import Image2 from './assets/react-1.svg'
export default function App() {
  return (
    <>
      <h1>React Typescript Webpack starter - {process.env.NODE_ENV} - {process.env.NAME}</h1>
      <img src={Image} />
      <img src = {Image2}/>
    </>
  );
}
