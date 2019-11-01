import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from 'src/templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor, fieldsMetaData }) => {
  const data = entry.getIn(['data']).toJS()
  let author = {
    thumbnail: {
      publicURL: ''
    }
  }

  if (data.author) {
    console.log('The author field meta data: ', fieldsMetaData.getIn(['author', data.author]))
    author = {
      thumbnail: {
        publicURL: ''
      }
    }
  }

  console.log('The data is: ', data)
  console.log('The author is: ', author)

  return (<BlogPostTemplate
    content={widgetFor('body')}
    description={data.description}
    title={data.title}
    author={author}
  />)
}


BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
