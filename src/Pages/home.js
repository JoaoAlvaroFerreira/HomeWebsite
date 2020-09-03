import React from 'react';
import Navbar from './../Components/navbar';
import MyCarousel from './../Components/carousel';



class Home extends React.Component {
    render() {
        return(
        <div>
        <Navbar/>
        <MyCarousel/>
        </div>
        )
    }
  }

export default Home;