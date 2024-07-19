import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';

const App = () => {
    return (
        <div className='w-full h-screen font-[satoshi_variables]'>
            <Navbar />
            <Work />
        </div>
    );
}

export default App;
