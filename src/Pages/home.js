import React from 'react';
import Navbar from './../Components/navbar';
import MyCarousel from './../Components/carousel';
import Profile from './../Components/profile';


class Home extends React.Component {
    render() {
        return(
        <div>
        <Navbar/>
        <Profile/>
        <MyCarousel/>
       
        </div>
        )
    }
  }

export default Home;