import React from 'react'
import "./home.scss"
import About from "../about/About"
import Facts from '../facts/Facts'
import Services from '../services-comp/Services'
import Features from '../features/Features'
import Price from '../price/Price'
import Quote from '../quote/Quote'
import Team from '../team/Team'

const Home = () => {
  return (
    <div>
        <div className="container-home">
            <div className="left">
                <h3>TRANSPORT & LOGISTICS SOLUTION</h3><br />
                <h1>#1 Place For Your <span style={{color:"brown"}}>Logistics</span><br />Solution</h1><br />
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ad voluptate nemo cupiditate <br /> suscipit accusamus fugiat ab 
                    molestias obcaecati
                </h3>
            </div>
            <div className="right"></div>
        </div>
        <div className="about">
          <About/>
        </div>
        <div className="facts">
          <Facts/>
        </div><br /><br />
        <div className="services">
          <Services/>
        </div>
        <div className="features">
          <Features/>
        </div>
        <div className="price">
          <Price/>
        </div>
        <div className="quote">
          <Quote/>
        </div><br />
        <div className="team">
          <Team/>
        </div>
    </div>
  )
}

export default Home