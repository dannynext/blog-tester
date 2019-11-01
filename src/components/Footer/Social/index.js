import * as React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Facebook } from 'src/img/social/facebook.svg'
import { ReactComponent as Twitter } from 'src/img/social/twitter.svg'
import { ReactComponent as LinkedIn } from 'src/img/social/linkedin.svg'
import { IconLink } from 'src/components/Icon'

import * as style from './style.module.css'

export default function Social({ links }) {
  const { facebook, twitter, linkedin } = links

  return (
    <div className={style.wrapper}>
      <IconLink
        className={style.link}
        title={facebook.title}
        href={facebook.url}
        external
      >
        <Facebook />
      </IconLink>
      <IconLink
        className={style.link}
        title={twitter.title}
        href={twitter.url}
        external
      >
        <Twitter />
      </IconLink>
      <IconLink
        className={style.link}
        title={linkedin.title}
        href={linkedin.url}
        external
      >
        <LinkedIn />
      </IconLink>
    </div>
  )
}

Social.propTypes = {
  links: PropTypes.object,
}
