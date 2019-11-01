import React from 'react'
import PropTypes from 'prop-types'

import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage'

import * as style from './style.module.css'
import { Link } from 'gatsby'

const BlogPostPreview = ({
  title,
  featuredimage,
  date,
  category,
  description,
  excerpt,
  slug,
}) => {
  return (
    <div className={style.post}>
      {featuredimage && (
        <PreviewCompatibleImage
          imageInfo={{
            image: featuredimage,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
      )}
      <div className={style.meta}>
        <h2 className={style.title}>
          <Link to={slug}>{title}</Link>
        </h2>
        <p className={style.label}>{date}</p>
        <p className={style.label}>{category}</p>
      </div>
      <p className={style.content}>
        {description ? description : excerpt}
        <br />
        <Link to={slug} className={style.cta}>
          Keep Reading →
        </Link>
      </p>
    </div>
  )
}

BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string,
  featuredimage: PropTypes.object,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
}

export default BlogPostPreview
