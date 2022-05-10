import React from 'react';
import './App.css';
import Header from './components/Header'
import User from './components/User';
import Footer from './components/Footer';

// import imgPizza from "./assets/pizza.jpg";

import ReactPlayer from 'react-player'

function App() {

  const title = "Hello Ironborn, shall we go for a break?"
  const user = {
    userName: "bob",
    age: 20
  }

  const myId = "food-container"

  const getFavouriteFood = () => {
    if (user.userName === "alice") {
      return "pizza"
    } else {
      return "salad"
    }
  }

  const displayAlert = () => {
    alert("user clicked on a button");
  }


  return (
    <>
      <Header>
        <p>You are living in year 2022</p>
      </Header>

      <hr />

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />


      <hr />

      <User userName="Alice" surname="Smith" age={20 + 10} isLoggedIn />
      <User userName="Bob" surname="Brown" age={22} isLoggedIn={false} />

      <hr />

      <Footer>
        <p>This is my copyright message</p>
      </Footer>

    </>
  );
}

export default App;
