import * as React from 'react'
import PropTypes from 'prop-types'

import * as style from './style.module.css'

export default function JobListing({ job }) {
  const { title, url, location } = job
  return (
    <div className={style.listing}>
      <h5 className={style.title}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h5>
      <p className={style.location}>{location}</p>
    </div>
  )
}

JobListing.propTypes = {
  job: PropTypes.exact({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
}
