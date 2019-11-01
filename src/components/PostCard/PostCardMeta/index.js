import React from 'react'
import { getAuthorLink } from 'src/helpers'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as style from './style.module.css'

export default function PostCardMeta({
  authorImage,
  author,
  date,
}) {
  return (
    <div className={style.meta}>
      <img
        src={authorImage}
        className={style.thumbnail}
        alt={author}
      />
      <Link
        to={getAuthorLink(author)}
        className={style.author}
      >
        {author}
      </Link>
      <p className={style.date}>{date}</p>
    </div>
  )
}

PostCardMeta.propTypes = {
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string,
  date: PropTypes.string.isRequired,
}
