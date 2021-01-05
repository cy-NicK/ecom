import React from 'react'
import './CSS/Home.css'
import banner from './Assets/banner.jpg'
import { Button } from '@material-ui/core'
function Home(){
    return(
        <div className='Home'>
            <div className='Home_container' style={{ 
                backgroundImage:`url(${banner})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                
            }}>
            <div className='Home_container_overlay'>
            <div className='Home_welcome'>
                    <span style={{
                        fontWeight:'700',
                        fontSize:'7vh'
                    }}>Welcome,</span>
                    <br/>
                    <p style={{paddinG:'5%'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    <Button className='Home_container_discover_button'>
                        <span style={
                        {   height:'100%',
                            fontWeight:'500',
                            color:'white',
                            fontSize:'3vh' }
                            }>EXPLORE...
                            </span>
                        </Button>
                </div>
            </div>
                
            </div>
        </div>
    
    )
    
}
export default Home