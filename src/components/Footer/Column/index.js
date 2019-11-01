import * as React from 'react'
import PropTypes from 'prop-types'
import * as style from './style.module.css'

export default function Column({ title, children, links }) {
  return (
    <div className={style.column}>
      {title && (
        <h4 className={style.column_title}>{title}</h4>
      )}
      {children ? (
        children
      ) : (
        <ul className={style.list}>
          {links.map(({ href, text }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Column.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  links: PropTypes.array,
}
