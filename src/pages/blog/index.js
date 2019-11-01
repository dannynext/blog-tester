import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import BlogRoll from 'src/components/BlogRoll/index'

export default function BlogIndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>Blog</h1>
      <BlogRoll posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { templateKey: { eq: "blog-post" } }
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
            featuredpost
            description
            category
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
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
