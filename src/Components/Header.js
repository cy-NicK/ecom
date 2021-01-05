import React from 'react'
import './CSS/Header.css'
import logo from './CSS/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function Header(){
    return(
        <div className='Header'>
        {/* <span className='Header_logo'> </span> */}
        <img src={logo} className='Header_logo'/>
        <div className='Header_search'>
            <input type='text' className='Header_search_input' placeholder='Search'/>
            <button  className='Header_search_icon'><SearchIcon/></button>
        </div>
        <div className='Header_nav'>
            <div className='Header_nav_options'>
               Submit Your Picture 
            </div>
            <div className='Header_nav_options'>
                Log In
            </div>
            <div className='Header_nav_options'>
                Sign Up
            </div>
            <div className='Header_nav_options'>
                About
            </div>
            <div className='Header_option_basket'>
                <AddShoppingCartIcon/>
                <span className='Header_basket_count'>0</span>
            </div>
            
        </div>
        </div>
    
    )
    

}
export default Header