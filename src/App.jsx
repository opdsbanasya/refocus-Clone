import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';

const App = () => {
    return (
        <div className='w-full h-screen font-[satoshi_variables]'>
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
        </div>
    );
}

export default App;
