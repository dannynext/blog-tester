import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import useSiteMetadata from 'src/components/SiteMetadata'
import Favicon from 'src/img/favicon.ico'
import AppleTouch from 'src/img/apple-touch-icon.png'
import Favicon16 from 'src/img/favicon-16x16.png'
import Favicon32 from 'src/img/favicon-32x32.png'
import FallBackOG from 'src/img/next-og.png'
import SafariPinnedTab from 'src/img/safari-pinned-tab.svg'

const SeoHelper = ({
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
}) => {
  const {
    title: fallbackTitle,
    description: fallbackDescription,
    url,
  } = useSiteMetadata()

  const seoTitle = title
    ? `${title} | ${fallbackTitle}`
    : fallbackTitle
  const seoDescription = description || fallbackDescription
  const seoImage = imageSrc ? imageSrc : FallBackOG

  return (
    <Helmet>
      <html lang="en" />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />

      <link rel="icon" href={Favicon} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={AppleTouch}
      />
      <link
        rel="icon"
        type="image/png"
        href={Favicon32}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={Favicon16}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={SafariPinnedTab}
        color="#343d48"
      />
      <meta name="theme-color" content="#fff" />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta
        name="og:description"
        content={seoDescription}
      />
      <meta name="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:image:src" content={seoImage} />
      <meta
        content={imageWidth ? imageWidth : `1200`}
        property="twitter:image:width"
      />
      <meta
        content={imageHeight ? imageHeight : `675`}
        property="twitter:image:height"
      />
    </Helmet>
  )
}

SeoHelper.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
}

export default SeoHelper
