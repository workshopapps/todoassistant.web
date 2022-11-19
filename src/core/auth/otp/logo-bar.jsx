import React from 'react'
import ticked from '../images/ticked.svg'

function LogoBar() {
    return <div className='logo-bar'>
        <img src={ticked} alt='ticked logo'></img>
        <p>Ticked</p>
    </div>
}
export default LogoBar