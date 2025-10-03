import React, { useState } from 'react';
import Container from './Container';
import { MdOutlineMenu } from 'react-icons/md';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <div>
            <div className="box-border border-b border-b-[rgba(233,233,233,1)] bg-white">
                <Container>
                    <nav className="px-8 py-4 flex justify-between items-center">
                        <div className='block md:hidden'>
                            <MdOutlineMenu className='text-2xl cursour-pointer ' onClick={() => setMobileMenu(!mobileMenu)}>

                            </MdOutlineMenu>
                        </div>
                        <h1 className="text-[rgba(19,11,45,1)] font-inter text-[24px] leading-[26px] font-bold tracking-[0%] text-left">
                            CS-Ticket System</h1>
                        <div className="md:flex hidden items-center gap-6">
                            <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                Home
                            </a>
                            <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                FAQ
                            </a>
                            <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                Changelog
                            </a>
                            <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                Blog
                            </a>
                            <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                Download
                            </a>
                            <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                Contact
                            </a>
                            <button className="rounded text-white w-[145px] h-[43px] flex flex-row justify-center items-center gap-[10px] py-3 px-4 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
                                + New Ticket
                            </button>
                        </div>
                    </nav>
                    {
                        mobileMenu && (

                            <div className='md:hidden flex flex-col mx-8 gap-4'>
                                <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                    Home
                                </a>
                                <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                    FAQ
                                </a>
                                <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                    Changelog
                                </a>
                                <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                    Blog
                                </a>
                                <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                    Download
                                </a>
                                <a href="#" className="text-gray-600 text-[16px] hover:cursor-pointer hover:text-gray-950">
                                    Contact
                                </a>
                                <button class="rounded text-white w-[125px] h-[43px] flex flex-row justify-center items-center gap-[10px] py-3 px-4 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] mb-4">
                                    + New Ticket
                                </button>
                            </div>
                        )
                    }
                </Container>
            </div>
        </div>
    );
};

export default Navbar;