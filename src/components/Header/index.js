import React from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'
import logo from 'src/img/logo.svg'
import Navigation from './Navigation/Index'

import style from './style.module.css'
import * as grid from 'src/css/grid.module.css'

const Header = class extends React.Component {
  state = {
    active: false,
    navBarActiveClass: '',
  }

  render() {
    const containerClass = cn(
      grid.container,
      style.header_container
    )
    return (
      <nav
        className={style.header_wrapper}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={containerClass}>
          <div className={style.header}>
            <div className={style.logo_wrapper}>
              <Link
                to="/"
                title="NEXT Logo"
                className={style.logo_link}
              >
                <img
                  src={logo}
                  alt="Next Trucking"
                  className={style.logo}
                />
                <p className={style.wordmark}>Labs</p>
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
