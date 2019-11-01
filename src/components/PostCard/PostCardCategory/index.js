import * as React from 'react'
import PropTypes from 'prop-types'

import * as style from './style.module.css'

export default function PostCardCategory({ category }) {
  return <span className={style.category}>{category}</span>
}

PostCardCategory.propTypes = {
  category: PropTypes.string.isRequired,
}
