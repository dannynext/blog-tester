import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { getAuthorLink } from 'src/helpers'

import { Link } from 'gatsby'
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage'
import { IconLink } from 'src/components/Icon'
import { ReactComponent as Twitter } from 'src/img/social/twitter.svg'
import { ReactComponent as Github } from 'src/img/social/github.svg'

import * as style from './style.module.css'
import { authorType } from '../../types/author'

const TWITTER = 'Twitter'
const GITHUB = 'Github'

export default function AuthorInfo({ author, primary }) {
  const {
    title,
    position,
    description,
    thumbnail,
    twitter,
    github,
  } = author

  console.log(Github)

  const wrapperClass = cn(
    style.wrapper,
    primary && style.primary
  )

  return (
    <div className={wrapperClass}>
      <div className={style.author}>
        <PreviewCompatibleImage
          imageInfo={{
            image: thumbnail.publicURL,
            className: style.image,
          }}
        />
        <div className={style.detail}>
          <h5 className={style.title}>
            <Link to={getAuthorLink(title)}>{title}</Link>
          </h5>
          <p className={style.position}>{position}</p>
          <p className={style.description}>{description}</p>
          <div className={style.social}>
            {twitter && (
              <IconLink
                title={TWITTER}
                href={twitter}
                external
                large
              >
                <Twitter />
              </IconLink>
            )}
            {github && (
              <IconLink
                title={GITHUB}
                href={github}
                external
                large
              >
                <Github />
              </IconLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

AuthorInfo.propTypes = {
  author: authorType,
  primary: PropTypes.bool,
}
