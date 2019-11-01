import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import SeoHelper from 'src/components/SeoHelper'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer/Index'

import 'src/css/type.module.css'
import style from './style.module.css'
import grid from 'src/css/grid.module.css'

export default function Layout({ fullWidth, children }) {
  const mainClass = cn(
    !fullWidth && grid.container,
    fullWidth && style.no_padding,
    style.main
  )
  return (
    <div className={style.layout}>
      <SeoHelper />
      <Header />
      <div className={mainClass}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
