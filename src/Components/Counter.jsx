import React from 'react';
import Container from './Container';

const Counter = ({ progress = 0, reSolved = 0 }) => {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-5'>
                <div className='relative p-7 flex flex-col items-center justify-center text-white h-[250px] rounded-lg overflow-hidden bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]' >
                    <img src="/vector1.png" alt="Left" className='absolute bottom-0 left-0 h-full w-32 sm:w-48 lg:w-72 opacity-90 ' />
                    <img src="/vector1.png" alt="Right" className='absolute bottom-0 right-0 h-full w-32 sm:w-48 lg:w-72 opacity-90 transform rotate-y-180 ' />
                    <h2 className='font-semibold text-lg relative z-10'>In Progress</h2>
                    <h5 className='font-bold text-5xl z-10'>{progress}</h5>
                </div>
                <div className='relative p-7 flex flex-col items-center justify-center text-white h-[250px] rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1))]' >
                    <img src="/vector1.png" alt="Left" className='absolute bottom-0 left-0 h-full w-32 sm:w-48 lg:w-72 opacity-90 ' />
                    <img src="/vector1.png" alt="Right" className='absolute bottom-0 right-0 h-full w-32 sm:w-48 lg:w-72 opacity-90 transform rotate-y-180' />
                    <h2 className='font-semibold text-lg relative z-10'>Resolved</h2>
                    <h5 className='font-bold text-5xl z-10'>{reSolved}</h5>
                </div>
            </div>
        </Container>
    );
};

export default Counter;