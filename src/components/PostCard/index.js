import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage'
import PostCardCategory from './PostCardCategory'
import PostCardMeta from './PostCardMeta'

import * as style from './style.module.css'

export default function PostCard({
  title,
  image,
  category,
  slug,
  date,
  author,
  authorImage,
}) {
  return (
    <article className={style.post}>
      <header>
        {category && (
          <PostCardCategory category={category} />
        )}
        {image && (
          <PreviewCompatibleImage
            imageInfo={{
              image,
              alt: `Featured image thumbnail for post ${title}`,
              className: style.post_image,
            }}
          />
        )}
        <div className={style.post_meta}>
          <h3 className={style.post_title}>
            <Link to={slug}>{title}</Link>
          </h3>
          <PostCardMeta
            author={author}
            authorImage={authorImage}
            date={date}
          />
        </div>
      </header>
    </article>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  category: PropTypes.string,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string,
}
