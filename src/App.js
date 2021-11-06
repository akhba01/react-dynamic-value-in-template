import React from "react";
import "./style.css";

export default function App() {
  const title = "Welcome to the new blog"
  const likes = 50;
  const person = { name : "yoshi", age : 30}
  const link = "http://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes }</p>

        {/* <p>{person}</p> */}
        <p>{ 10 }</p>
        <p>{ "Hello, Ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{ Math.random() * 100}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}
