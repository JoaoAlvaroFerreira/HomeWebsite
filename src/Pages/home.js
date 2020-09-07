import React from 'react';
import Navbar from './../Components/navbar';
import MyCarousel from './../Components/carousel';
import Footer from './../Components/footer';



class Home extends React.Component {
    render() {
        return(
        <div classname="background-blue">
        <Navbar/>
        <MyCarousel/>
        </div>
        )
    }
  }

export default Home;