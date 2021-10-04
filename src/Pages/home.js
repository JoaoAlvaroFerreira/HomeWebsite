import React from 'react';
import Navbar from './../Components/navbar';
import MyCarousel from './../Components/carousel';
import Card from './../Components/cards';
import Profile from './../Components/profile';
import Footer from './../Components/footer';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <MyCarousel />
        <Card/>
        <Footer />
      </div>
    )
  }
}

export default Home;