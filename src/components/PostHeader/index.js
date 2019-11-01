import * as React from 'react'
import { authorType } from 'src/types/author'
import { getAuthorLink } from 'src/helpers'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'

import * as style from './style.module.css'

export default function PostHeader({
  title,
  image,
  date,
  author,
}) {
  return (
    <BackgroundImage fluid={image} className={style.header}>
      <div className={style.content_wrapper}>
        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.meta_container}>
            {author && (
              <>
                {author.thumbnail.publicURL && (
                  <Link
                    to={getAuthorLink(author.title)}
                    className={style.thumbnail_link}
                  >
                    <img
                      src={author.thumbnail.publicURL}
                      alt={author.title}
                      className={style.thumbnail}
                    />
                  </Link>
                )}
                <Link
                  to={`/author/${kebabCase(author.title)}`}
                  className={style.meta}
                >
                  {author.title}
                </Link>
              </>
            )}
            <p className={style.meta}>{date}</p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  author: authorType,
}
