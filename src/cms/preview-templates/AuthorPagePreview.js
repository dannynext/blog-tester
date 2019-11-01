import React from 'react'
import PropTypes from 'prop-types'
import { AuthorIntro } from 'src/templates/author'

export default function AuthorPagePreview({ entry }) {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <AuthorIntro
        title={data.title}
        description={data.description}
        github={data.github}
        twitter={data.twitter}
        thumbnail={data.thumbnail}
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
