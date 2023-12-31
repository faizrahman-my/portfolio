import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { svg_navbar } from '../assets/icons/Icon'

export const Header = () => {

    let about, project, contact

    const activeNav = (routeNow) => {}
    
    return (
        <div>

            <div className='flex flex-row p-5'>
                <div className='grid content-center basis-2/4'>
                    <div className='max-md:flex items-center'>

                        <div className="min-md:hidden dropdown z-10">
                            <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFD369"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-web-back2">
                                <li>
                                    <NavLink to={'/about'} className='grid justify-items-center'>
                                        <img src={svg_navbar.folder_user} />
                                        <p className='font-khand text-xl my-2 text-web-text2'>About</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/project'} className='grid justify-items-center'>
                                        <img src={svg_navbar.code_box} />
                                        <p className='font-khand text-xl my-2 text-web-text2'>Project</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'} className='grid justify-items-center'>
                                        <img src={svg_navbar.at} />
                                        <p className='font-khand text-xl my-2 text-web-text2'>Contact</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <h3 className='text-web-text1 font-khand min-sm:text-3xl max-sm:text-xl font-bold'><Link to={'/'}>Faiz Rahman</Link></h3>

                    </div>
                </div>
                <div className='basis-2/4'>

                    <div className='flex justify-end max-md:hidden'>
                        <ul className='flex gap-20 bg-web-back2 px-10 rounded-full font-khand font-semibold'>
                            <li className='min-sm:hover:bg-web-back3 rounded-md py-1 px-2'>
                                <NavLink to={'/about'} className='grid justify-items-center'>
                                    <p className='text-xl my-2 text-web-text2'>About</p>
                                </NavLink>
                            </li>
                            <li className='min-sm:hover:bg-web-back3 rounded-md py-1 px-2'>
                                <NavLink to={'/project'} className='grid justify-items-center'>
                                    <p className='text-xl my-2 text-web-text2'>Project</p>
                                </NavLink>
                            </li>
                            <li className='min-sm:hover:bg-web-back3 rounded-md py-1 px-2'>
                                <NavLink to={'/contact'} className='grid justify-items-center'>
                                    <p className='text-xl my-2 text-web-text2'>Contact</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
