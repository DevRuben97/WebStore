import React from 'react';

const Header= (props)=>{
    return (
        <header>
            <h2 className="text-center text-primary" style={{fontSize: 50}}><i class="fas fa-store"></i> {props.Title}</h2>
        </header>
    )
}

export default Header;