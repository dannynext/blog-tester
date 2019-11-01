import React from 'react'
import { Link } from 'gatsby'
import Layout from 'src/components/Layout'

import * as style from './style.module.css'

const NotFoundPage = () => (
  <Layout>
    <h1 className={style.title}>NOT FOUND</h1>
    <p className={style.body}>This page doesn’t exist.</p>

    <Link to="/" className={style.link}>
      &#8592; Go Back Home
    </Link>
  </Layout>
)

export default NotFoundPage
