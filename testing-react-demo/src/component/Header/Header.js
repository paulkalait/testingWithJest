import React from 'react'
import './styles.scss'

const Header = () => {
  return (
    <header  data-test='headerComponent'>
      <div className='wrapper'>
        <div className='logo'>
        <h1 data-test='logoIMG'>Logo</h1>
        </div>
      </div>
    </header>
  )
}

export default Header