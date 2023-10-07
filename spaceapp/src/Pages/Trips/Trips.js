import React from 'react'
import './Trips.css';

const Trips = () => {
  return (
    <>
      <div className='images-container' style= {{paddingLeft: 50, display: 'flex'}}>
        <img src='/images/mercury.jpg' style={{height: 50, width: 50, marginRight: 60, marginTop: 200}}/>
        <img src='/images/venus.jpeg' style={{height: 80, width: 80, marginRight: 60, marginTop: 400}}/>
        <img src='/images/mars.jpeg' style={{height: 70, width: 70, marginRight: 60, marginTop: 200}}/>
        <img src='/images/jupiter.jpeg' style={{height: 250, width: 270, marginRight: 60, marginTop: 400}}/>
        <img src='/images/saturn.png' style={{height: 180, width: 230, marginRight: 60, marginTop: 200}}/>
        <img src='/images/uranus.jpeg' style={{height: 140, width: 140, marginRight: 60, marginTop: 400}}/>
        <img src='/images/neptune.jpeg' style={{height: 120, width: 120, marginRight: 60, marginTop: 200}}/>
      </div>
    </>
  )
}

export default Trips
