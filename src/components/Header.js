import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix' />
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/564x/8b/03/36/8b03364764c793acf7c15b21f93a4628.jpg' alt='Usuário' />
                </a>
            </div>
        </header>
    );
}