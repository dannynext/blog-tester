import React from 'react'
import PropTypes from 'prop-types'
import AuthorInfo from 'src/components/AuthorInfo'
import * as grid from 'src/css/grid.module.css'

export default function AuthorPagePreview({ entry }) {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    console.log(data)
    const author = {
      title: data.title || 'Author Name',
      position: data.position || 'Author Position',
      description: data.description || 'A description about the author',
      thumbnail: {
        publicURL: data.thumbnail || '/img/default-avatar.jpg'
      }
    }

    console.log('The author is: ', author)

    return (
      <div className={grid.container}>
        <AuthorInfo
          author={author}
        />
      </div>

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
