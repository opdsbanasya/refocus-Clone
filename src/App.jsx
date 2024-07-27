import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();

    
    return (
        <div className='w-full h-screen font-[satoshi_variables]'>
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
