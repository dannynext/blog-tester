// @flow
import React from 'react'
import { Link } from 'gatsby'
import github from 'src/img/github-icon.svg'
import style from './style.module.css'

const path = `category`

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <Link
        className={style.link}
        activeClassName={style.active}
        to={`/${path}/engineering`}
      >
        Engineering
      </Link>
      <Link
        className={style.link}
        activeClassName={style.active}
        to={`/${path}/design`}
      >
        Design
      </Link>
      <Link
        className={style.link}
        activeClassName={style.active}
        to={`/${path}/product`}
      >
        Product
      </Link>
      <a
        href={`https://github.com/NextDeveloperTeam`}
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <img
          src={github}
          alt="Next Trucking Github"
          className={style.icon}
        />
      </a>
    </div>
  )
}

export default Navigation
