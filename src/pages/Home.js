import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
import Button from '../components/StyledHero'
export default function Home() {
    return (
        <>
       <Hero> 
           <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
               <Link to="/shaleh" className="btn-primary">
                   Our Shaleh
               </Link>
           </Banner>
       </Hero>
       <Services/>
       <FeaturedRoom/>
       <Button>BUTTON </Button>   
       </>
    )
}
