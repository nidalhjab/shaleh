import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'
export default class Shaleh extends Component {
    render() {
        return (
            <>
          <Hero hero="roomsHero">
              <Banner title="Rooms">
                  <Link className="btn-primary" to="/">Return Home</Link>
              </Banner>
          </Hero>
          <RoomsContainer/>
          </>
        )
    }
}
