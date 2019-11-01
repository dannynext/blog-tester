import React from 'react'

import BlogRoll from 'src/components/BlogRoll'
import * as style from './style.module.css'

const RelatedArticles = ({ posts }) => {
  // TODO: filter by related articles instead of just grabbing first 3
  const filteredArticles = posts.slice(2)

  return (
    <>
      <h2>Related Articles</h2>
      <BlogRoll
        className={style.blog_roll}
        posts={filteredArticles}
      />
    </>
  )
}

export default RelatedArticles
