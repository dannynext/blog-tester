import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import PostCard from 'src/components/PostCard'

import * as grid from 'src/css/grid.module.css'
import * as style from './style.module.css'

export default function BlogRoll({ posts, className }) {
  const blogRollClass = cn(
    style.posts,
    !className && grid.three,
    className && className
  )

  return (
    <div className={blogRollClass}>
      {posts &&
        posts.map(({ node: post }) => {
          const {
            frontmatter: {
              title,
              category,
              featuredimage,
              date,
            },
            fields: { slug, authorName, authorThumbnail },
          } = post

          return (
            <PostCard
              key={post.id}
              title={title}
              image={featuredimage}
              category={category}
              slug={slug}
              date={date}
              author={authorName}
              authorImage={authorThumbnail.publicURL}
            />
          )
        })}
    </div>
  )
}

BlogRoll.propTypes = {
  posts: PropTypes.array.isRequired,
  className: PropTypes.string,
}
