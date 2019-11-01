import React from 'react'
import PropTypes from 'prop-types'
import AuthorInfo from 'src/components/AuthorInfo'

export default function AuthorPagePreview({ entry }) {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const author = {
      ...data,
      thumbnail: data.thumbnail || {
        publicURL: ''
      }
    }

    return (
      <AuthorInfo
        author={author}
      />
    )
  } else {
    return <p>...Loading</p>
  }
}

AuthorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}
