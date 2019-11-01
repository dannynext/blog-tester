import * as React from 'react'
import cn from 'classnames'
import * as style from './style.module.css'
import PropTypes from 'prop-types'

export default function Icon({
  src,
  alt,
  large,
  className,
}) {
  const iconClass = cn(
    style.icon,
    large && style.large,
    className && style.className
  )
  return <img src={src} alt={alt} className={iconClass} />
}

export function IconLink({
  title,
  large,
  children,
  href,
  external,
  className,
}) {
  const iconClass = cn(
    style.icon,
    style.link,
    large && style.large,
    className && className
  )
  return (
    <a
      className={iconClass}
      title={title}
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {children}
    </a>
  )
}

Icon.propType = {
  src: PropTypes.any.isRequired,
  alt: PropTypes.string,
  large: PropTypes.bool,
  className: PropTypes.string,
}
