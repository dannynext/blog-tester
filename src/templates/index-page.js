import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Hero from 'src/components/Hero/Index'
import BlogRoll from 'src/components/BlogRoll'
import Layout from 'src/components/Layout/index'

import * as grid from 'src/css/grid.module.css'

export function IndexPageTemplate({
  heading,
  subheading,
  featuredPosts,
  posts,
}) {
  return (
    <>
      <Hero heading={heading} subheading={subheading} />
      {featuredPosts && (
        <BlogRoll
          posts={featuredPosts}
          className={grid.two}
        />
      )}
      {posts && <BlogRoll posts={posts} />}
    </>
  )
}

export default function IndexPage({ data }) {
  const {
    frontmatter: { heading, subheading },
  } = data.heading
  const { edges: posts } = data.posts

  return (
    <Layout>
      <IndexPageTemplate
        heading={heading}
        subheading={subheading}
        featuredPosts={data.featuredPosts.edges}
        posts={posts}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    heading: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        heading
        subheading
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          featuredpost: { eq: false }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
            authorName
            authorThumbnail {
              publicURL
            }
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            category
            featuredimage {
              childImageSharp {
                fluid(
                  maxWidth: 640
                  maxHeight: 470
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    featuredPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          featuredpost: { eq: true }
        }
      }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
            authorName
            authorThumbnail {
              publicURL
            }
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            description
            category
            featuredimage {
              childImageSharp {
                fluid(
                  maxWidth: 640
                  maxHeight: 470
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
