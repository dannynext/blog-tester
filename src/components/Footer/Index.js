import * as React from 'react'
import Column from './Column'
import Social from './Social'

import * as style from './style.module.css'

const COPYRIGHT = `Copyright 2015-${new Date().getFullYear()} NEXT Trucking, Inc. All Rights Reserved`

const companyLinks = [
  {
    href: 'https://www.nexttrucking.com/about-us/',
    text: 'About Us',
  },
  {
    href: 'https://www.nexttrucking.com/careers/',
    text: 'Careers',
  },
  {
    href: 'https://www.nexttrucking.com/drive-for-next/',
    text: 'Drive for NEXT',
  },
]

const supportLinks = [
  {
    href: 'http://help.nexttrucking.com/en/',
    text: 'Help Center',
  },
  {
    href: 'https://www.nexttrucking.com/contact-us/',
    text: 'Contact Us',
  },
]

const socialLinks = {
  linkedin: {
    title: `LinkedIn`,
    url: `https://www.linkedin.com/company/next-trucking`,
  },
  facebook: {
    title: `Facebook`,
    url: `https://www.facebook.com/nexttrucking/`,
  },
  twitter: {
    title: `Twitter`,
    url: `https://twitter.com/nexttrucking`,
  },
}

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <Column title="Company" links={companyLinks} />
        <Column title="Support" links={supportLinks} />
        <Column>
          <p>
            (855) 688-6398
            <br />
            <a href="mailto:info@nexttrucking.com">
              info@nexttrucking.com
            </a>
            <br />
            2383 Utah Ave Ste 108, El Segundo, CA 90245
          </p>
          <p>
            App disponible en Español
            <br />
            App现在提供中文版本供您使用
          </p>
        </Column>
        <Column>
          <Social links={socialLinks} />
        </Column>
      </div>
      <div className={style.bottom}>
        <p>{COPYRIGHT}</p>
        <a
          href="https://www.nexttrucking.com/privacy/"
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
        <a
          href="https://www.nexttrucking.com/terms/"
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
      </div>
    </footer>
  )
}
