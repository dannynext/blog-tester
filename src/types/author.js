import PropTypes from 'prop-types'
export const authorType = PropTypes.exact({
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.exact({
    publicURL: PropTypes.string,
  }),
  github: PropTypes.string,
  twitter: PropTypes.string,
})
